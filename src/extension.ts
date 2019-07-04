// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('onDebugAdapterProtocolTracker:node');
	vscode.debug.registerDebugAdapterTrackerFactory('node', {
		createDebugAdapterTracker(session: vscode.DebugSession) {
			vscode.window.showInformationMessage('createDebugAdapterTracker:node');
			return {};
		}
	});
	vscode.debug.registerDebugAdapterTrackerFactory('node2', {
		createDebugAdapterTracker(session: vscode.DebugSession) {
			vscode.window.showInformationMessage('createDebugAdapterTracker:node2');
			return {};
		}
	});
}

// this method is called when your extension is deactivated
export function deactivate() { }
