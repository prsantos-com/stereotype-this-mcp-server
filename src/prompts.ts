import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const make_this_text_canadian_prompt = `Make this text resemble stereotypical Canadian English and culture. Following these guidelines:
1. Use Canadian spelling (e.g., "colour" instead of "color").
2. Incorporate Canadian slang and expressions (e.g., "eh", "toque", "aboot").
3. Reference Canadian culture, geography, or history (e.g., hockey, maple syrup, Tim Horton's coffee).
4. Use polite and friendly language typical of Canadians.
5. Avoid stereotypes that are not commonly associated with Canadians.
`;

const make_this_text_british_prompt = `Make this text resemble stereotypical British English and culture. Following these guidelines:
1. Use British spelling (e.g., "colour" instead of "color").
2. Incorporate British slang and expressions (e.g., "cheers", "bloody", "loo").
3. Reference British culture, geography, or history (e.g., tea, the late Queen, the King, football).
4. Use polite and friendly language typical of the British.
5. Avoid stereotypes that are not commonly associated with the British.
`;

const make_this_text_american_prompt = `Make this text resemble stereotypical American English and culture. Following these guidelines:
1. Use American spelling (e.g., "color" instead of "colour").
2. Incorporate American slang and expressions (e.g., "dude", "awesome", "soda").
3. Reference American culture, geography, or history (e.g., baseball, Thanksgiving, the Fourth of July, the American Dream).
4. Make references to American pop culture (e.g., Hollywood, fast food, music).
5. Avoid stereotypes that are not commonly associated with Americans.
`;

const make_this_text_australian_prompt = `Make this text resemble stereotypical Australian English and culture. Following these guidelines:
1. Use Australian spelling (e.g., "colour" instead of "color").
2. Incorporate Australian slang and expressions (e.g., "mate", "arvo", "bush", "no worries").
3. Reference Australian culture, geography, or history (e.g., kangaroos, the Outback, ANZAC Day).
4. Use polite and friendly language typical of Australians.
5. Avoid stereotypes that are not commonly associated with Australians.
`;

const create_a_canadian_greeting_prompt = (
  name: string,
  season: string
) =>
  `Make this greeting resemble stereotypical Canadian English and culture. Following these guidelines:
1. Use Canadian spelling (e.g., "colour" instead of "color").
2. Incorporate Canadian slang and expressions (e.g., "eh", "toque", "aboot").
3. Reference Canadian culture, geography, or history (e.g., hockey, maple syrup, Tim Horton's coffee).
4. Use polite and friendly language typical of Canadians.
5. Avoid stereotypes that are not commonly associated with Canadians.
6. Use the provided name: ${name}
7. Use the provided weather season: ${season}
8. Make small talk about the weather and the person's name.
`;

const create_a_british_greeting_prompt = (
    name: string,
    season: string
    ) =>
    `Make this greeting resemble stereotypical British English and culture. Following these guidelines:
1. Use British spelling (e.g., "colour" instead of "color").
2. Incorporate British slang and expressions (e.g., "cheers", "bloody", "loo").
3. Reference British culture, geography, or history (e.g., tea, the late Queen, the King, football).
4. Use polite and friendly language typical of the British.
5. Avoid stereotypes that are not commonly associated with the British.
6. Use the provided name: ${name}
7. Use the provided weather season: ${season}
8. Make small talk about the weather and the person's name.
`;

const create_a_american_greeting_prompt = (
    name: string,
    season: string
    ) =>
    `Make this greeting resemble stereotypical American English and culture. Following these guidelines:
1. Use American spelling (e.g., "color" instead of "colour").
2. Incorporate American slang and expressions (e.g., "dude", "awesome", "soda").
3. Reference American culture, geography, or history (e.g., baseball, Thanksgiving, the Fourth of July, the American Dream).
4. Make references to American pop culture (e.g., Hollywood, fast food, music).
5. Avoid stereotypes that are not commonly associated with Americans.
6. Use the provided name: ${name}
7. Use the provided weather season: ${season}
8. Make small talk about the weather and the person's name.
`;

const create_a_australian_greeting_prompt = (
    name: string,
    season: string
    ) =>
    `Make this greeting resemble stereotypical Australian English and culture. Following these guidelines:
1. Use Australian spelling (e.g., "colour" instead of "color").
2. Incorporate Australian slang and expressions (e.g., "mate", "arvo", "bush", "no worries").
3. Reference Australian culture, geography, or history (e.g., kangaroos, the Outback, ANZAC Day).
4. Use polite and friendly language typical of Australians.
5. Avoid stereotypes that are not commonly associated with Australians.
6. Use the provided name: ${name}
7. Use the provided weather season: ${season}
8. Make small talk about the weather and the person's name.
`;

export function registerPrompts(server: McpServer) {
  server.prompt(
    "make-this-text-canadian",
    "Make the text resemble stereotypical Canadian English and culture",
    async () => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: make_this_text_canadian_prompt,
            },
          },
        ],
      };
    }
  );

  server.prompt(
    "make-this-text-british",
    "Make the text resemble stereotypical British English and culture",
    async () => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: make_this_text_british_prompt,
            },
          },
        ],
      };
    }
  );

  server.prompt(
    "make-this-text-american",
    "Make the text resemble stereotypical American English and culture",
    async () => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: make_this_text_american_prompt,
            },
          },
        ],
      };
    }
  );

  server.prompt(
    "make-this-text-australian",
    "Make the text resemble stereotypical Australian English and culture",
    async () => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: make_this_text_australian_prompt,
            },
          },
        ],
      };
    }
  );

  server.prompt(
    "create-a-canadian-greeting",
    "Create a stereotypical Canadian greeting that references the weather, the person's name, and some small talk",
    {
      name: z.string().describe("Name of person being greeted"),
      season: z.string().describe("Weather season"),
    },
    async ({ name, season }) => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: create_a_canadian_greeting_prompt(name, season),
            },
          },
        ],
      };
    }
  );

  server.prompt(
    "create-a-british-greeting",
    "Create a stereotypical British greeting that references the weather, the person's name, and some small talk",
    {
      name: z.string().describe("Name of person being greeted"),
      season: z.string().describe("Weather season"),
    },
    async ({ name, season }) => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: create_a_british_greeting_prompt(name, season),
            },
          },
        ],
      };
    }
  );

  server.prompt(
    "create-a-american-greeting",
    "Create a stereotypical American greeting that references the weather, the person's name, and some small talk",
    {
      name: z.string().describe("Name of person being greeted"),
      season: z.string().describe("Weather season"),
    },
    async ({ name, season }) => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: create_a_american_greeting_prompt(name, season),
            },
          },
        ],
      };
    }
  );

  server.prompt(
    "create-a-australian-greeting",
    "Create a stereotypical Australian greeting that references the weather, the person's name, and some small talk",
    {
      name: z.string().describe("Name of person being greeted"),
      season: z.string().describe("Weather season"),
    },
    async ({ name, season }) => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: create_a_australian_greeting_prompt(name, season),
            },
          },
        ],
      };
    }
  );
}
