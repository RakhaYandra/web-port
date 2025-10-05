import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for Intersection Observer API
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for the observer
 * @param {boolean} options.freezeOnceVisible - Whether to stop observing once visible
 * @returns {Array} [ref, isIntersecting, entry] - Element ref, intersection state, and full entry
 */
export const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    freezeOnceVisible = false
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    // If element is not available or IntersectionObserver is not supported
    if (!element || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        setEntry(entry);
        setIsIntersecting(isElementIntersecting);

        // If freezeOnceVisible is true and element is visible, stop observing
        if (freezeOnceVisible && isElementIntersecting) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, freezeOnceVisible]);

  return [elementRef, isIntersecting, entry];
};

/**
 * Simplified version for basic visibility detection
 * @param {Object} options - Observer options
 * @returns {Array} [ref, isVisible] - Element ref and visibility state
 */
export const useVisibility = (options = {}) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
    ...options
  });

  return [ref, isIntersecting];
};

/**
 * Hook for lazy loading images
 * @param {Object} options - Observer options
 * @returns {Array} [ref, shouldLoad] - Image ref and loading state
 */
export const useLazyLoad = (options = {}) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    freezeOnceVisible: true,
    ...options
  });

  return [ref, isIntersecting];
};