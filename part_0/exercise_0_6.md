```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Add note to notes and redraw
    Note right of browser: Clear button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Response text {"message":"note created"}
    deactivate server
```
