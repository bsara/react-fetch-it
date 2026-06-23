Changelog
=========================================================================================

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]


## [1.0.1] - 2026-06-22

### Added

- This changelog.

### Fixed

- Server-side rendering crash caused by `createContext` executing in the React Server
  Component graph. The context and middleware provider modules are now marked with the
  `"use client"` directive.


## [1.0.0]

Initial release.


[Unreleased]: https://github.com/bsara/react-fetch-it/compare/v1.0.1...HEAD
[1.0.1]:      https://github.com/bsara/react-fetch-it/releases/tag/v1.0.1
[1.0.0]:      https://github.com/bsara/react-fetch-it/releases/tag/v1.0.0