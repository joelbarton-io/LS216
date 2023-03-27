function meeting(s) {
  let names = s.split(';');
  let formatted = names.map(name => name.toUpperCase().split(':')).map(name => [name[1], name[0]]);
  return formatted.sort().map(name => '('.concat(name.join(', '), ')'))
}

console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))
