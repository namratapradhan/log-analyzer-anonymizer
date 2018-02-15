# log-parser-analyzer-anonymizer
This project provide command line tools that parse, analyze and anonymize a log file.

After you download the project, please run the following command from the base folder of this project. 
>>> npm install

This will download all the dependencies required for the project.


Tool 1: log-analyze-tool.js
This tool takes one parameter, the relative path of the log file.

To run this tool
>>> node log-analyze-tool.js .\api.log

In this example, api.log file must be int he same folder as the log-analyze-tool.js.

After you run it, it will first analyze the data after which it will provide you with options to view the results. Simply enter a number from 1 - 5 and press enter to choose the corresponding option. Press 5, to exit.


Tool 2: log-anonymize-tool.js
This tool takes two parameters, the relative path of the log file to anonymize and the relative path of the new file that will be created.

To run this tool
>>> node log-anonymize-tool.js .\api.log .\api-new.log

In this example, api.log file must be int he same folder as the log-anonymize-tool.js and the api-new.log file will also be created in the same folder.





