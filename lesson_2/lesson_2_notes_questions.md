### Test processing patterns
#### regex
- can use to search, replace, build a list, validate, etc a string input
- `String` & `Regex` objects offer many in-built methods for such tasks
- when it comes down to it, most problems involving parsing a string boil down the just a few main actions
- we can talk about the regex engine 'consuming' a character if we are working with consecutive matches (e.g. like a whitespace being used in one match not being available for an adjacent match later on)
#### string methods
- `indexOf`
- `lastIndexOf`
- `replace` - in conjuction with regex and `/g`
- `split`
- `substring` - non-inclusive of value @ larger index!
- `toUpperCase`
- `toLowerCase`
- `toString` can be called on a number literal with an additional `.`
