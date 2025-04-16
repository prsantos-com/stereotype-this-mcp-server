# Stereotype This MCP Server

An MCP Server that contains prompts that you can use to turn any message into a goofy inaccurate stereotype of any four broad cultures.

Key Features:

- Convert any text into one of four available stereotyped cultures.

- Create a greeting in one of four available stereotyped cultures using a person's name and the current weather season for boring small talk.

## Prompts

The following prompts are available:

| Name | Description | Arguments |
| ---- |------------ |---------- |
| make-this-text-canadian       | Make the text resemble stereotypical Canadian English and culture | None |
| make-this-text-british        | Make the text resemble stereotypical British English and culture | None |
| make-this-text-american       | Make the text resemble stereotypical American English and culture | None |
| make-this-text-australian     | Make the text resemble stereotypical Australian English and culture | None |
| create-a-canadian-greeting    | Create a stereotypical Canadian greeting that references the weather, the person's name, and some small talk | `name` (required), `season` (required) |
| create-a-british-greeting     | Create a stereotypical British greeting that references the weather, the person's name, and some small talk  | `name` (required), `season` (required)  |
| create-a-american-greeting    | Create a stereotypical American greeting that references the weather, the person's name, and some small talk | `name` (required), `season` (required) |
| create-a-australian-greeting  | Create a stereotypical Australian greeting that references the weather, the person's name, and some small talk | `name` (required), `season` (required) |

## Configuration

### [Claude Desktop](https://claude.ai/download)

Add this configuration to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "stereotype-this": {
      "command": "npx",
      "args": [
        "-y",
        "@prsantos-com/stereotype-this-mcp-server"
      ]
    }
  }
}
```

### Note

This is meant to demonstrate a basic usage of prompts in an MCP server, using a bit of humour.
