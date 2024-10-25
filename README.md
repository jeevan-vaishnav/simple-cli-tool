
# Simple CLI Tool

A simple command-line tool for basic arithmetic operations built with Node.js.

## Features

- Addition
- Subtraction
- Multiplication
- Division

## Requirements

- Node.js (version 16 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/simple-cli-tool.git
   cd simple-cli-tool
Install dependencies:

npm install

Usage
You can run the CLI tool using the following commands:

Addition
node index.js --add 1,2,3
Example output:
Result of addition: 6

Subtraction
node index.js --subtract 10,5
Example output:
Result of subtraction: 5

Multiplication
node index.js --multiply 2,3,4
Example output:
Result of multiplication: 24

Division
node index.js --divide 10,2
Example output:

Result of division: 5

Packaging as an Executable

To create a single executable file:

Install pkg globally if you haven't already:

npm install -g pkg
Build the executable:
pkg .
Run the generated executable:

For Linux:
./simple-cli-tool-linux --add 1,2,3
For macOS:
./simple-cli-tool-macos --add 1,2,3
For Windows:
simple-cli-tool-win.exe --add 1,2,3

Commands Overview
Here are the commands you can use with this CLI tool:

Addition: --add <numbers> - Adds the provided comma-separated numbers.
Subtraction: --subtract <numbers> - Subtracts the provided comma-separated numbers.
Multiplication: --multiply <numbers> - Multiplies the provided comma-separated numbers.
Division: --divide <numbers> - Divides the first number by the subsequent comma-separated numbers.

License
This project is licensed under the MIT License.
