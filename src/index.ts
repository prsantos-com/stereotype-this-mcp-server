import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  registerPrompts,
} from "./prompts.js";

export const server = new McpServer(
  {
    name: "stereotype-this-mcp-server",
    version: "1.0.1",
  },
  {
    capabilities: {
      prompts: {},
    },
  }
);

registerPrompts(server);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
