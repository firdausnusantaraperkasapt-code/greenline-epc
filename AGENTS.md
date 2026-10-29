<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Certificate content lives in the dedicated `/certificate` file route and uses the shared site layout, preserving consistent navigation and page headings.
- Uploaded certificates and the company profile are served through Lovable asset pointers; PDF download links use the same-origin asset URL with a download filename so visitors receive the original document.
