<!-- adapted from script by Mark Rackley -->
<script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>

<!-- hide the OOTB "form" -->
<style type="text/css">
  .ms-formtable {display:none;}
</style>

<script type="text/javascript">
	var css = "//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css";
 	if(document.createStyleSheet)
 	{
		document.createStyleSheet(css);
 	} 
	else {
		var hd = document.getElementsByTagName("head")[0];
		var lk = document.createElement('link');
		lk.type = 'text/css';
		lk.rel = 'stylesheet';
		lk.href = css;
		hd.appendChild(lk);
 	}
</script>
 
<script type="text/javascript">
	$(function() {
		$( "#tabs" ).tabs();
	});
</script>
  
<script type="text/javascript">
    $(document).ready(function() {
        //loop through all the spans in the custom layout        
        $("span.customField").each(function()
        {
            elem = $(this);
			sib = $(this).parent().children(".customLabel").first();

            //get the field name from the custom layout
            internalName = $(this).attr("data-internalName");

            //find the corresponding label and field from the default form and move it into the custom layout
            $("table.ms-formtable td").each(function(){
                if (this.innerHTML.indexOf('FieldInternalName="'+internalName+'"') != -1){
                    $(this).contents().appendTo(elem);
					$(this).prev().contents().appendTo(sib);
                }
            });
        });
    });
</script>