"use client"

import type { MDXComponents } from 'mdx/types'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => <h1 style={{ fontSize: '2.5rem' }}>{children}</h1>,
        img: (props) => {
            const { src, alt, width, height, ...rest } = props;
            const imgSrc = typeof src === 'string' ? src : '';

            // Return responsive image with proper styling
            return (
                <div style={{ margin: '2rem 0' }}>
                    <img
                        src={imgSrc}
                        alt={alt || ''}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '4px',
                        }}
                        {...rest}
                    />
                </div>
            );
        },
        ...components,
    }
} 