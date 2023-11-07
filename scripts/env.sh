#!/bin/bash

# https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/


# Check if the .env file exists
if [ ! -f .env ]; then
  echo "Error: .env file not found."
  exit 1
fi

# Specify the output file name (react_ui/public/env-config.js by default)
output_file=${1:-react_ui/public/env-config.js}

# Recreate the output config file
rm -f $output_file
touch $output_file

# Add assignment
echo "window._env_ = {" >> $output_file

# Read each line in .env file
# Each line represents key=value pairs
while IFS='=' read -r varname varvalue || [[ -n $varname ]]; do
  # Remove leading/trailing whitespace from varname and varvalue
  varname=$(echo $varname | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')
  varvalue=$(echo $varvalue | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')

  if [ -n "$varname" ]; then
    # Read value of current variable if exists as an environment variable
    value=${!varname}
    # Otherwise, use value from .env file
    [ -z "$value" ] && value="$varvalue"

    # Append configuration property to JS file
    echo "  $varname: \"$value\"," >> $output_file
  fi
done < .env

echo "}" >> $output_file
