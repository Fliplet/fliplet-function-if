Fliplet.Functions.register('com.fliplet.function.if', function(settings, context) {
  const condition = _.get(settings, 'condition');

  if (!eval(condition)) {
    context.pass = false;

    // keep empty to continue the execution of the next function in the series,
    // but not the nested functions.
    return Promise.reject();
  }

  context.pass = true;
  context.parent = settings;

  // allow executing nested functions
  return Promise.resolve();
});