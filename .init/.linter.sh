#!/bin/bash
cd /home/kavia/workspace/code-generation/food-explorer-5f949aad/frontend_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

