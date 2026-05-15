# AI Student Observation Room

Single-file demo: open **`index.html`** in a modern desktop browser (double-click or drag into a tab).

1. On first open, pick a **Gemini text model** (free-tier options are listed) and paste your **Google AI Studio / Gemini API key** — both are stored only in this browser via `localStorage`. Use **Change model** in the header anytime.
2. **Teach** the student in the left panel (zero outside knowledge; hidden internal notes accumulate).
3. **Upload** a homework PDF or image on the right, then **Analyze document**.
4. Review the **Study Guide** tab (optional: reveal rubric bullets).
5. **Deploy exam** on the Exam tab, then **Grade all** and view **Results**.

No build step, no server, no `npm install`.

Requires network access to call `generativelanguage.googleapis.com` with your API key.

## Development

Validate the inline script syntax (optional):

```bash
node _check-syntax.mjs
```

## Publish to GitHub

This folder is ready as a Git repo (`main`, initial commit). To create a remote and push:

1. Install and sign in with [GitHub CLI](https://cli.github.com/) (if needed):

   ```powershell
   winget install --id GitHub.cli -e --accept-package-agreements --accept-source-agreements
   gh auth login
   ```

2. From this directory, create the GitHub repo and push (pick a unique name):

   ```powershell
   gh repo create YOUR-USERNAME/ai-student-observation-room --public --source=. --remote=origin --push
   ```

Alternative without `gh`: create an empty repo on GitHub, then:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
