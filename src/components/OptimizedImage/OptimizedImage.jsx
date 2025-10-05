import { useState, useCallback } from "react";
import { useLazyLoad } from "../../hooks/useIntersectionObserver";
import styles from "./OptimizedImage.module.css";

/**
 * Optimized Image Component with lazy loading and error handling
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alternative text for accessibility
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {boolean} props.priority - Whether to load immediately (for above-fold images)
 * @param {boolean} props.placeholder - Whether to show placeholder while loading
 * @param {string} props.placeholderSrc - Custom placeholder image
 * @param {Function} props.onLoad - Callback when image loads
 * @param {Function} props.onError - Callback when image fails to load
 */
export const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  placeholder = true,
  placeholderSrc,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(priority ? src : null);

  // Use lazy loading for non-priority images
  const [imageRef, shouldLoad] = useLazyLoad({
    threshold: 0.1,
    rootMargin: "50px",
  });

  // Update image source when should load
  useState(() => {
    if (shouldLoad && !priority && !imageSrc) {
      setImageSrc(src);
    }
  }, [shouldLoad, priority, imageSrc, src]);

  const handleLoad = useCallback(
    (event) => {
      setIsLoaded(true);
      onLoad?.(event);
    },
    [onLoad]
  );

  const handleError = useCallback(
    (event) => {
      setHasError(true);
      setIsLoaded(true); // Prevent infinite loading state
      onError?.(event);
    },
    [onError]
  );

  const handleRetry = useCallback(() => {
    setHasError(false);
    setIsLoaded(false);
    setImageSrc(src);
  }, [src]);

  return (
    <div
      ref={imageRef}
      className={`${styles.imageContainer} ${className}`}
      style={{ width, height }}
      {...props}
    >
      {/* Placeholder while loading */}
      {placeholder && !isLoaded && !hasError && (
        <div className={styles.placeholder}>
          {placeholderSrc ? (
            <img
              src={placeholderSrc}
              alt=""
              className={styles.placeholderImage}
              aria-hidden="true"
            />
          ) : (
            <div className={styles.placeholderContent}>
              <div className={styles.placeholderIcon}>🖼️</div>
            </div>
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className={styles.errorState}>
          <div className={styles.errorIcon}>⚠️</div>
          <p className={styles.errorText}>Failed to load image</p>
          <button
            onClick={handleRetry}
            className={styles.retryButton}
            aria-label="Retry loading image"
          >
            Retry
          </button>
        </div>
      )}

      {/* Actual image */}
      {imageSrc && !hasError && (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`
            ${styles.image} 
            ${isLoaded ? styles.loaded : styles.loading}
          `}
        />
      )}

      {/* Loading spinner */}
      {!isLoaded && !hasError && imageSrc && (
        <div className={styles.loadingSpinner}>
          <div className={styles.spinner}></div>
        </div>
      )}
    </div>
  );
};
