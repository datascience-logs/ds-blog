// Tailwind CSS Configuration for VoidWriter Pro Theme
window.tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-error": "#690005",
                "inverse-surface": "#dce2f6",
                "inverse-primary": "#4059aa",
                "on-background": "#dce2f6",
                "on-surface-variant": "#c5c5d3",
                "primary-fixed-dim": "#b6c4ff",
                "on-secondary-container": "#4a1c00",
                "on-primary-fixed-variant": "#264191",
                "surface-bright": "#323949",
                "on-secondary-fixed": "#341100",
                "primary": "#b6c4ff",
                "tertiary-fixed": "#dbe1ff",
                "on-primary": "#05297a",
                "surface-dim": "#0c1321",
                "outline-variant": "#444651",
                "on-secondary-fixed-variant": "#783200",
                "surface": "#0c1321",
                "surface-tint": "#b6c4ff",
                "primary-fixed": "#dce1ff",
                "on-tertiary": "#002a78",
                "primary-container": "#1e3a8a",
                "tertiary-container": "#00389b",
                "inverse-on-surface": "#2a3040",
                "on-error-container": "#ffdad6",
                "surface-variant": "#2e3544",
                "on-tertiary-container": "#8ea9ff",
                "secondary-fixed": "#ffdbca",
                "secondary": "#ffb690",
                "surface-container-high": "#232a39",
                "outline": "#8f909d",
                "surface-container-highest": "#2e3544",
                "on-primary-fixed": "#00164e",
                "on-tertiary-fixed": "#00174b",
                "secondary-container": "#ec6a06",
                "surface-container-low": "#151b2a",
                "tertiary-fixed-dim": "#b4c5ff",
                "on-tertiary-fixed-variant": "#003da9",
                "on-surface": "#dce2f6",
                "background": "#0c1321",
                "on-secondary": "#552100",
                "secondary-fixed-dim": "#ffb690",
                "error": "#ffb4ab",
                "on-primary-container": "#90a8ff",
                "surface-container": "#19202e",
                "surface-container-lowest": "#070e1c",
                "tertiary": "#b4c5ff",
                "error-container": "#93000a"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "stack-xs": "4px",
                "gutter": "24px",
                "stack-lg": "32px",
                "container-max": "1200px",
                "margin-page": "40px",
                "stack-sm": "8px",
                "editor-width": "760px",
                "stack-md": "16px",
                "unit": "8px"
            },
            "fontFamily": {
                "body-md": ["Inter"],
                "display": ["Space Grotesk"],
                "code": ["JetBrains Mono"],
                "body-lg": ["Inter"],
                "h1": ["Space Grotesk"],
                "label-sm": ["Inter"],
                "h2": ["Space Grotesk"]
            },
            "fontSize": {
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "display": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "code": ["14px", { "lineHeight": "1.7", "fontWeight": "400" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "h1": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }],
                "label-sm": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600" }],
                "h2": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }]
            }
        },
    },
};

// Initialize Decap CMS Custom Preview (Example)
// CMS.registerPreviewStyle("/admin/theme.css");
