/// <reference types="google-apps-script" />

declare namespace GoogleAppsScript {
    namespace Menus {
        enum DocTypes {
            SPREADSHEET = "spreadsheet",
            PRESENTATION = "presentation",
            FORM = "form",
            DOCUMENT = "document",
        }

        enum ItemTypes {
            MENU = "menu",
            ITEM = "item",
            SEPARATOR = "separator",
        }

        interface ItemOptions {
            title: string;
            type?: ItemTypes;
            items?: ItemOptions[];
            action: string;
        }

        interface BuildMenuOptions {
            title: string;
            docType?: DocTypes;
            items?: ItemOptions[];
            append?: boolean;
            ui?: GoogleAppsScript.Base.Ui;
        }

        interface MenuApp {
            buildMenu: (
                options: BuildMenuOptions
            ) => GoogleAppsScript.Base.Menu | null;
        }
    }
}

declare var MenuApp: GoogleAppsScript.Menus.MenuApp;
