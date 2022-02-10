// https://www.codewars.com/kata/514a024011ea4fb54200004b

domainName = url => url
  .match(/(?<=(?:www\.|https?:\/\/))[^.]*/)[0]