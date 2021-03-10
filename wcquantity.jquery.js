	/**
	 * Плагин добавляет кнопки +/- на карточки товаров Woocomerce
     * 
     * Кнопка "Add to cart" должна быть обернута в <div>
     * Плагин применяется к этому блоку
	 */

(function( $ ) {
    $.fn.wcQuantity = function() {
    
        return this.each(function(){

            $this = $(this)

            // добавляем разметку
            $this.prepend('<div class="wcq-block"></div>');

            $outerBlock = $this.find('.wcq-block');
            $outerBlock.prepend(
                '<button class="wcq-dec">-</buttom>',
                '<input class="wcq-quantity" disabled />',
                '<button class="wcq-inc">+</buttom>'
                );

            // получаем селекторы элементов интерфейса
            var $incBtn = $this.find('.wcq-inc');
            var $decBtn = $this.find('.wcq-dec');
            var $quantityField = $this.find('.wcq-quantity');
            var $toCartBtn = $this.find('.add_to_cart_button');

            //изменяем стили
            // $quantityField.css({
            //     'background-color': 'transparent',
            //     'border': 'none',
            //     'text-align': 'center',
            //     'width': '20px'
            // });

            var itemQuantity = $toCartBtn.data("quantity");

            // обновляет значения полей
            var updateQuantity = function(){

                $quantityField.val(itemQuantity);
                $toCartBtn.attr("data-quantity", itemQuantity);
                
            };

            updateQuantity();

            // +1
            $incBtn.on('click', function(e){

                e.preventDefault();

                itemQuantity++;
                updateQuantity();
            });

            // -1
            $decBtn.on('click', function(e){

                e.preventDefault();

                if ( itemQuantity >= 2 ){

                    itemQuantity--;
                    updateQuantity();
                }
            });

        });
  
    };
  })(jQuery);