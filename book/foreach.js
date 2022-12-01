let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});

names.forEach((name, idx) => console.log(idx, name) );

// names.each_with_index { |name, idx| puts idx + name }