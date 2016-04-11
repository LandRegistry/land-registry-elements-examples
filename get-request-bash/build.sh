#!/bin/bash

# Download the tarball of the assets
wget -O assets.tar.gz 'https://land-registry-elements.herokuapp.com/build?components[elements/govuk/layout]=on&components[elements/govuk/phase-banner]=on&components[elements/govuk/typography]=on&'

# Setup our dist folder
mkdir -p dist/assets

# And extract the tarball
tar xzvf assets.tar.gz -C dist/assets
