// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('onDebugResolve:node');
	vscode.debug.registerDebugConfigurationProvider('node', {
		resolveDebugConfiguration: (_, config) => {
			vscode.window.showInformationMessage('resolveDebugConfiguration:node');
			return config;
		}
	});
	vscode.debug.registerDebugConfigurationProvider('node2', {
		resolveDebugConfiguration: (_, config) => {
			vscode.window.showInformationMessage('resolveDebugConfiguration:node2');
			return config;
		}
	});
}

// this method is called when your extension is deactivated
export function deactivate() { }
