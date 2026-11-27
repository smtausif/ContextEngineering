# Full context

Sends every original passage for the question to the model.

## Flow

All passages + question → structured answer → shared scoring and saved results.

`fullContext.ts` uses the shared prompt builder and model client. Passage titles,
text, and original sentence numbers are preserved. A completed question uses **one model call**.

## Run

From the project root:

```powershell
npm run ask -- --count 50 --start 10
```
