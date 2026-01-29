import { YOUTUBE_CONTEXT_MENU_ID } from "@constants/contextMenu.ts";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import createContextMenu from "@/createContextMenu.ts";

describe("createContextMenu", () => {
  const mockCreate = vi.fn();
  const mockGetMessage = vi.fn();
  const mockConsoleError = vi
    .spyOn(console, "error")
    .mockImplementation(() => {});

  beforeEach(() => {
    vi.clearAllMocks();

    global.chrome = {
      contextMenus: {
        create: mockCreate,
      },
      i18n: {
        getMessage: mockGetMessage,
      },
      runtime: {
        lastError: null,
      },
    } as unknown as typeof chrome;
  });

  afterEach(() => {
    mockConsoleError.mockRestore();
  });

  it("should create the context menu with the correct parameters", () => {
    mockGetMessage.mockReturnValue('Pesquisar no YouTube por "%s"');

    createContextMenu();

    expect(mockCreate).toHaveBeenCalledWith(
      {
        id: YOUTUBE_CONTEXT_MENU_ID,
        title: 'Pesquisar no YouTube por "%s"',
        contexts: ["selection"],
      },
      expect.any(Function),
    );
  });

  it("should not log an error if the context menu is successfully created", () => {
    mockGetMessage.mockReturnValue('Pesquisar no YouTube por "%s"');

    createContextMenu();

    const callback = mockCreate.mock.calls[0][1];
    callback();

    expect(mockConsoleError).not.toHaveBeenCalled();
  });
});
