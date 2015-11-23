<!-- adapted from script by Mark Rackley -->
<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>

<!-- hide the OOTB "form" -->
<style type="text/css">
  .ms-formtable {display:none;}
</style>

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