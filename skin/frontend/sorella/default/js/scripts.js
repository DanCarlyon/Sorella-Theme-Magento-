var $j = jQuery.noConflict();
$j(function() {
	$j('label.label-radio-configurable').click(function() {
		$j(this).parent().find('input').click();
	});
});