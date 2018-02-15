# log-parser-analyzer-anonymizer
This project provides tools to parse, analyze and anonymize a log file.

Tool 1: log-analyze-tool.js
This tool takes one parameter, the relative path of the log file.

To run this tool
>>> node log-analyze-tool.js .\api.log

In this example, api.log file must be int he same folder as the log-analyze-tool.js.

Tool 2: log-anonymize-tool.js
This tool takes two parameters, the relative path of the log file to anonymize and the relative path of the new file that will be created.

To run this tool
>>> node log-anonymize-tool.js .\api.log .\api-new.log

In this example, api.log file must be int he same folder as the log-anonymize-tool.js and the api-new.log file will also be created in the same folder.





