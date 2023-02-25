// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as prettier from 'prettier';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// // Use the console to output diagnostic information (console.log) and errors (console.error)
	// // This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "prettier-cadence-formatter" is now active!');

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with registerCommand
	// // The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('prettier-cadence-formatter.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World2 from Prettier - Cadence Formatter!');
	// });

	// context.subscriptions.push(disposable);

	//language
	let disposable2 = vscode.languages.registerDocumentFormattingEditProvider(
    "cadence",
    {
      async provideDocumentFormattingEdits(document) {
        const text = document.getText();
				const cadence = await import('prettier-plugin-cadence');
        const options = await prettier.resolveConfig(document.fileName, {
          editorconfig: true,
        });
        const formattedText = prettier.format(text, {
          ...options,
          parser: "cadence",
					plugins: [cadence],
        });

        let firstLine = document.lineAt(0);
        let lastLine = document.lineAt(document.lineCount - 1);
        let textRange = new vscode.Range(
          firstLine.range.start,
          lastLine.range.end
        );

        return [vscode.TextEdit.replace(textRange, formattedText)];
      },
    }
  );

	context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
export function deactivate() {}
