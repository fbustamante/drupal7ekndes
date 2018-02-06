<?php

/**
 * @file
 * Display Suite 1 column template.
 */
?>
<?php drupal_add_js(path_to_theme() .'/js/contactMessaje.js'); ?>
<div class="ds-1col <?php print $classes;?> clearfix <?php print $ds_content_classes;?>">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <?php print $ds_content; ?>
</div>