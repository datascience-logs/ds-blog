/**
 * VoidWriter Pro Preview Component
 * Renders the CMS data into a structure matching preview.css
 */
const Preview = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data', 'title']) || 'Untitled Post';
  const date = entry.getIn(['data', 'date']);
  const description = entry.getIn(['data', 'description']);
  const body = widgetFor('body');

  return h('div', { className: 'preview-container' },
    h('header', { className: 'preview-header' },
      h('h1', {}, title),
      h('div', { className: 'meta' }, 
          h('span', {}, date ? date.toString() : 'No date set'),
          h('p', { className: 'desc' }, description)
      )
    ),
    h('hr', {}),
    h('main', { className: 'preview-body' }, body)
  );
};

// Register the custom preview style (scoped to iframe)
CMS.registerPreviewStyle("preview.css");

// Register the preview template for the 'posts' collection
CMS.registerPreviewTemplate("posts", Preview);

console.log("VoidWriter Pro: Preview System Modernized.");
