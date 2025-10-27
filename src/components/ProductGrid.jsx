import React, { useState, useEffect, useRef, useCallback } from 'react'
import ProductCard from './ProductCard'
import { SkeletonGrid, SkeletonCard } from './Loader'
import { useAnimatedLoader } from '../hooks/useAnimatedLoader'
import { getGeckos, getGeckosCount } from '../data/geckos'

function ProductGrid({ category, geckos: propGeckos }) {
    const [geckos, setGeckos] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const ITEMS_PER_PAGE = 6
    const observerTarget = useRef(null)
    const showLoader = useAnimatedLoader(loading, 200)

    // Check if using backward compatibility with propGeckos
    const isUsingProps = !!propGeckos

    useEffect(() => {
        if (!isUsingProps) {
            loadInitialGeckos()
        } else {
            // If using props, just set the geckos directly
            const filtered = category === 'all'
                ? propGeckos
                : propGeckos.filter(gecko => gecko.category === category)
            setGeckos(filtered)
            setLoading(false)
        }
    }, [category, propGeckos])

    const loadInitialGeckos = async () => {
        try {
            setLoading(true)
            setCurrentPage(0)
            const data = await getGeckos(category === 'all' ? 'all' : category, true, ITEMS_PER_PAGE, 0)
            setGeckos(data)

            // Check if there are more items
            const totalCount = await getGeckosCount(category === 'all' ? 'all' : category, true)
            setHasMore(data.length < totalCount)
        } catch (error) {
            console.error('Error loading geckos:', error)
            setHasMore(false)
        } finally {
            setLoading(false)
        }
    }

    const loadMoreGeckos = useCallback(async () => {
        if (loadingMore || !hasMore || isUsingProps) return

        try {
            setLoadingMore(true)
            const nextPage = currentPage + 1
            const offset = nextPage * ITEMS_PER_PAGE
            const data = await getGeckos(
                category === 'all' ? 'all' : category,
                true,
                ITEMS_PER_PAGE,
                offset
            )

            if (data.length > 0) {
                setGeckos(prev => [...prev, ...data])
                setCurrentPage(nextPage)

                // Check if there are more items
                const totalCount = await getGeckosCount(category === 'all' ? 'all' : category, true)
                setHasMore(geckos.length + data.length < totalCount)
            } else {
                setHasMore(false)
            }
        } catch (error) {
            console.error('Error loading more geckos:', error)
            setHasMore(false)
        } finally {
            setLoadingMore(false)
        }
    }, [loadingMore, hasMore, currentPage, category, geckos.length, isUsingProps])

    // Intersection Observer for infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loadingMore && !isUsingProps) {
                    loadMoreGeckos()
                }
            },
            { threshold: 0.1 }
        )

        const currentTarget = observerTarget.current
        if (currentTarget) {
            observer.observe(currentTarget)
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget)
            }
        }
    }, [hasMore, loadingMore, loadMoreGeckos, isUsingProps])

    if (showLoader) {
        return <SkeletonGrid count={6} />
    }

    const handleLoadMore = () => {
        if (!loadingMore && hasMore) {
            loadMoreGeckos()
        }
    }

    return (
        <div className="product-grid-container">
            <div className="product-grid">
                {geckos.length > 0 ? (
                    geckos.map(gecko => (
                        <ProductCard key={gecko.id} gecko={gecko} />
                    ))
                ) : (
                    <div className="no-geckos-message animate-fade-in">
                        <div className="empty-state">
                            <span className="empty-icon">🦎</span>
                            <p>No geckos found in this category.</p>
                        </div>
                    </div>
                )}

                {/* Intersection observer target */}
                {!isUsingProps && hasMore && geckos.length > 0 && (
                    <div ref={observerTarget} className="observer-target"></div>
                )}
            </div>

            {/* Loading more indicator */}
            {loadingMore && (
                <div className="loading-more-container">
                    <SkeletonGrid count={3} />
                </div>
            )}

            {/* Load More Button (fallback) */}
            {hasMore && !loadingMore && geckos.length > 0 && (
                <div className="load-more-container">
                    <button
                        className="load-more-btn"
                        onClick={handleLoadMore}
                        aria-label="Load more geckos"
                    >
                        Load More Geckos
                    </button>
                </div>
            )}

            {/* End of results message */}
            {!hasMore && geckos.length > 0 && (
                <div className="end-of-results">
                    <p>You've seen all geckos in this category! 🦎</p>
                </div>
            )}
        </div>
    )
}

export default ProductGrid