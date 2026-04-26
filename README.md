# Data Science Logs Blog

A production-ready Markdown blog system with visual CMS admin panel for **@datascience.logs**.

## Features

- Visual CMS admin panel at `/admin` via GitHub OAuth
- Rich Markdown editor with live preview
- Front matter form fields (title, date, tags, description)
- Code blocks with syntax highlighting and copy buttons
- Callout shortcodes (tips, warnings, verified)
- Auto-generated Table of Contents
- 100% static output - deploys to GitHub Pages ($0 cost)
- Zero personal information in code or content

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm start
```

Visit `http://localhost:8080` for the blog and `http://localhost:8080/admin` for the CMS.

### 3. Enable Local Backend (CMS Development)

For local CMS development, run:

```bash
npx decap-server
```

Then access `http://localhost:8080/admin`.

## CMS Setup with GitHub OAuth

### 1. Create a GitHub OAuth App

1. Go to GitHub → Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: Data Science Logs CMS
   - **Homepage URL**: `https://datascience.logs`
   - **Authorization callback URL**: `https://datascience.logs/admin/index.html`
4. Register and note the **Client ID** and **Client Secret**

### 2. Set Up Netlify Identity (for Git Gateway)

1. Create a Netlify site: `npx netlify init`
2. Enable Identity in Netlify dashboard
3. Add Git Gateway integration
4. Invite yourself as a user

### 3. Configure CMS

Update `src/admin/config.yml` backend section with your GitHub credentials.

## Writing Posts

1. Log in at `/admin`
2. Click "New Posts"
3. Fill in front matter fields:
   - **Title**: Clear, keyword-rich title
   - **Description**: One-sentence value proposition
   - **Date**: Publication date
   - **Status**: "draft" or "published"
   - **Tags**: Relevant keywords
   - **Estimated Time**: e.g., "2-3 hours"
4. Write content in Markdown
5. Click "Publish"

## Markdown Features

### Callouts

```
{% raw %}{% callout type="tip" %}Your content here{% endcallout %}{% endraw %}
{% raw %}{% callout type="warning" %}Your content here{% endcallout %}{% endraw %}
{% raw %}{% callout type="verified" %}Your content here{% endcallout %}{% endraw %}
```

### Code Blocks

Fenced code blocks with language identifier:

```markdown
```python
def hello():
    print("Hello, World!")
```
```

## Deployment

### GitHub Pages

1. Push to a GitHub repository
2. Go to Settings → Pages
3. Select source branch (e.g., `main` / `root` or `gh-pages`)
4. Site URL: `https://datascience.logs`

### Custom Domain

1. Update `CNAME` with your domain: `blog.datascience.logs`
2. Add CNAME record in your DNS provider
3. Enable HTTPS in GitHub Pages settings

## File Structure

```
├── .eleventy.js           # Eleventy configuration
├── package.json           # Dependencies
├── src/
│   ├── _data/site.json    # Global site metadata
│   ├── _includes/         # Nunjucks templates
│   ├── admin/             # Decap CMS files
│   ├── assets/            # CSS, JS, images
│   ├── posts/             # Markdown content
│   ├── index.njk          # Home page
│   └── 404.njk            # Error page
├── _site/                 # Built output (don't edit)
└── CNAME                  # Custom domain
```

## Build

```bash
npm run build
```

Output goes to `_site/`.

## Tech Stack

- **Eleventy 3+** - Static site generator
- **Decap CMS 3+** - Git-based admin panel
- **Nunjucks** - Template engine
- **PrismJS** - Syntax highlighting
- **GitHub Pages** - Free hosting

## Brand Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--orange` | #FF6B35 | Primary accent |
| `--white` | #FFFFFF | Background |
| `--blue` | #004E89 | Links, secondary |
| `--navy` | #0A1929 | Text, dark |
| `--gray` | #F5F7FA | Backgrounds |

## License

MIT - No personal info, no tracking, no cookies.