# 🚀 VoidWriter Pro: Production Setup

## 1. GitHub OAuth Configuration
To enable the CMS to commit changes to your repository:
1. Go to **GitHub Settings > Developer Settings > OAuth Apps > New OAuth App**.
2. **Application Name**: `VoidWriter Pro`
3. **Homepage URL**: `https://YOUR_DOMAIN.com`
4. **Authorization callback URL**: `https://YOUR_DOMAIN.com/admin/`
5. Copy your **Client ID** and generate a **Client Secret**.

## 2. Decap Auth Gatekeeper
Since GitHub OAuth requires a server-side exchange:
- Use a serverless gatekeeper like [Decap CMS OAuth](https://github.com/vencax/decap-cms-github-oauth) or a Netlify site (even if hosting on GH Pages).
- Update `auth_endpoint` in `config.yml` with your gatekeeper's URL.

## 3. Production Deployment
1. Update `YOUR_GITHUB_USERNAME` and `YOUR_DOMAIN` in `config.yml`.
2. Push the `/admin/` folder to your `main` branch.
3. Ensure GitHub Actions is configured to build your site on push.

## 4. Troubleshooting
- **Login Loop**: Ensure your `callback URL` matches exactly with the `/admin/` trailing slash.
- **Preview Not Loading**: Check browser console for mixed content warnings (ensure all CDNs are HTTPS).
- **Styles Broken**: If Decap updates their class names, use `[class*="stable-substring"]` selectors in `editor.css`.
