import React, { useState, useRef, useEffect } from 'react';

const MessageDisplay = ({ allMessages }) => {
    const MESSAGES_PER_BATCH = 10;
    const [displayedMessages, setDisplayedMessages] = useState([]);
    const [startIndex, setStartIndex] = useState(allMessages.length);
    const [hasMore, setHasMore] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const scrollContainerRef = useRef(null);
    const loadTriggerRef = useRef(null);
    const shouldScrollRef = useRef(false);

    useEffect(() => {
        if (isInitialLoad) {
            const endIndex = allMessages.length;
            const startIdx = Math.max(endIndex - MESSAGES_PER_BATCH, 0);
            setDisplayedMessages(allMessages.slice(startIdx, endIndex));
            setStartIndex(startIdx);
            setIsInitialLoad(false);
            shouldScrollRef.current = true;
        }
    }, [isInitialLoad, allMessages]);

    useEffect(() => {
        if (!isInitialLoad && allMessages.length > startIndex + displayedMessages.length) {
            const newMessages = allMessages.slice(startIndex + displayedMessages.length);
            setDisplayedMessages(prev => [...prev, ...newMessages]);
            shouldScrollRef.current = true;
        }
    }, [allMessages, startIndex, isInitialLoad]);

    useEffect(() => {
        if (shouldScrollRef.current && scrollContainerRef.current) {
            const scrollContainer = scrollContainerRef.current;
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
            shouldScrollRef.current = false;
        }
    }, [displayedMessages]);

    const loadPreviousMessages = () => {
        if (startIndex <= 0) {
            setHasMore(false);
            return;
        }

        const newStartIndex = Math.max(startIndex - MESSAGES_PER_BATCH, 0);
        const newMessages = allMessages.slice(newStartIndex, startIndex);

        const scrollContainer = scrollContainerRef.current;
        const previousScrollHeight = scrollContainer.scrollHeight;

        setDisplayedMessages(prev => [...newMessages, ...prev]);
        setStartIndex(newStartIndex);

        requestAnimationFrame(() => {
            const newScrollHeight = scrollContainer.scrollHeight;
            const scrollDiff = newScrollHeight - previousScrollHeight;
            scrollContainer.scrollTop = scrollDiff;
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];
                if (firstEntry.isIntersecting && hasMore) {
                    loadPreviousMessages();
                }
            },
            { threshold: 0.5 }
        );

        if (loadTriggerRef.current) {
            observer.observe(loadTriggerRef.current);
        }

        return () => {
            if (loadTriggerRef.current) {
                observer.unobserve(loadTriggerRef.current);
            }
        };
    }, [hasMore, startIndex]);

    return (
        <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-4 flex flex-col"
            style={{ height: 'calc(100vh - 120px)' }}
        >
            {hasMore && (
                <div
                    ref={loadTriggerRef}
                    className="h-8 flex items-center justify-center"
                >
                    <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
                </div>
            )}

            <div className="flex-1">
                {displayedMessages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex mb-2 ${msg.sent ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`p-3 rounded-lg max-w-[70%] ${
                                msg.sent ? 'bg-[#025144] text-white' : 'bg-[#202c33] text-white'
                            }`}
                        >
                            <p className="break-words">{msg.text}</p>
                            <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessageDisplay;