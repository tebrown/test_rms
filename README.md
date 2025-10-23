# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages at https://tebrown.github.io/test_rms/.

### Prerequisites
- GitHub account and repository: https://github.com/tebrown/test_rms
- Git authentication setup (HTTPS with Personal Access Token or SSH keys) to avoid permission errors.

### Build and Deploy
1. Build the project: `npm run build` (outputs to `dist/` folder with base path `/test_rms/`).
2. Deploy: `npm run deploy` (pushes `dist/` to the `gh-pages` branch using gh-pages package).

For local preview: `npm run preview`.

If you encounter permission errors:
- **HTTPS**: Use a Personal Access Token (PAT) instead of password: `git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/tebrown/test_rms.git`.
- **SSH**: Switch to SSH remote: `git remote set-url origin git@github.com:tebrown/test_rms.git` and ensure SSH keys are added to GitHub.

Ensure the repository settings enable GitHub Pages from the `gh-pages` branch.
