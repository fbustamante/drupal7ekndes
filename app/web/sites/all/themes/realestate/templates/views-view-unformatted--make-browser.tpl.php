<?php
/**
 * @file views-view-unformatted.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php foreach ($rows as $id => $row): ?>
  <div class="<?php print $classes_array[$id]; ?>">
    <?php print $row; ?>
	<?php if (!empty($title)): ?>
  
    <h3><?php print taxonomy_term_load($title)->name; ?></h3>
  
    <span class="make-items"><?php print count(taxonomy_select_nodes($title, FALSE)); ?> <?php print t('cars'); ?></span>
	
  <?php endif; ?>
  </div>
<?php endforeach; ?>

  