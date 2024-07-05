# NuxtJS Product Management Application

## Overview

This application is a product management system built with NuxtJS and tRPC. It allows users to view a list of products, add new products, and switch between multiple languages (English, Spanish, French).

## Features

- View a list of products
- Add new products
- Multi-language support (English, Spanish, French)

## Installation

1. Clone the repository
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   yarn install
   yarn run dev
   ```

## Usage

## Viewing Products

The main page displays a list of products. Each product shows its name, price, and description.

## Adding a New Product

Use the form provided to add a new product. Fill in the product name, price, and description, then click "Add Product".

## Switching Languages

Use the language switcher buttons to change the application language between English, Spanish, and French.

## Project Structure

- components/: Vue components used in the application
- composables/: Custom hooks and reusable logic
- pages/: NuxtJS pages
- plugins/: Plugins for external libraries and configurations
- types/: TypeScript type definitions
- assets/: Global styles and assets

## Internationalization

The application uses vue-i18n for internationalization. Language messages are defined in the plugins/i18n.js
