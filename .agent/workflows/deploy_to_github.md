---
description: Deploy the portfolio to GitHub
---

# Deploy to GitHub

This workflow guides you through initializing a git repository, committing your code, and pushing it to a GitHub repository.

1.  **Initialize Git**
    Run the following command to initialize a new git repository in your project folder:
    ```powershell
    git init
    ```

2.  **Add Files**
    Stage all your project files for commit (this respects your `.gitignore` file, so unnecessary files like `node_modules` are automatically excluded):
    ```powershell
    git add .
    ```

3.  **Commit Changes**
    Save your changes with a message:
    ```powershell
    git commit -m "Initial commit of portfolio"
    ```

4.  **Create Repository on GitHub**
    -   Go to [GitHub.com](https://github.com/) and sign in.
    -   Click the **+** icon in the top right and select **New repository**.
    -   Name it (e.g., `my-portfolio`).
    -   Click **Create repository**.

5.  **Connect to Remote**
    Copy the URL of your new repository (e.g., `https://github.com/your-username/my-portfolio.git`).
    Run this command in your terminal, replacing the URL with yours:
    ```powershell
    git remote add origin https://github.com/your-username/my-portfolio.git
    ```

6.  **Push Code**
    Upload your code to GitHub:
    ```powershell
    git push -u origin main
    ```
    (If `main` doesn't work, try `master`).

7.  **Verify**
    Refresh your GitHub repository page to see your files!
