$(function() {
  setInterval(function() {
    const trees = $('[data-widget="tree"]');
    trees.tree();
    $('body').layout('fix');
    $('body').layout('fixSidebar');

  }, 50)
})
