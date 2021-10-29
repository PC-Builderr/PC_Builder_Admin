# PC Builder
<br/>

## Description

High-school thesis. 
Online shop for computer components and configuring custom PC builds where users don't need to worry about the 
compatibility between components the application ensurses that components are compatible.
<br/>
<br/>


## Technologies, Libraries and APIs
<div>
  <img src="https://user-images.githubusercontent.com/57724836/139492400-e5854f38-8700-4c9a-ac63-5589d79d7d8e.png" 
       alt="TypeScript Logo" 
       width="90" 
       height="90">
  <img height="75" hspace="10"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png" 
       alt="React Logo" 
       width="90" 
       height="84">
  <img height="75" hspace="10"/>
  <img src="https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png" 
       alt="NestJS Logo" 
       width="90" 
       height="86">
  <img height="75" hspace="10"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" 
       alt="PostgreSQL Logo" 
       width="84" 
       height="90">
  <br/>
  <br/>
  <img src="https://image.opencart.com/cache/5bd71c18719f4-resize-710x380.jpg" 
       alt="Econt Logo" 
       width="142" 
       height="75">  
  <img height="75" hspace="20"/>
  <img src="https://www.pngkey.com/png/full/87-873276_1524532051-stripe-logo-stripe-payments.png" 
       alt="Stripe Logo" 
       style="border-radius: 8px;"
       width="180" 
       height="75"> 
  <br/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qvkwyXoEp63-8fLF6wm3bzxqypXoVGXCxaovfVezQNX5SVZVxluRocCTioU5PGtE3IA&usqp=CAU" 
       alt="MUI Logo" 
       style="border-radius: 8px;"
       width="75" 
       height="63"> 
  <img height="75" hspace="20"/>
  <img src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true" 
       alt="MUI Logo" 
       style="border-radius: 8px;"
       width="252" 
       height="65"> 
</div>

<br/>
<br/>

## PC Builder Repos
### [PC Builder Front End](https://github.com/valentin30/PC_Builder_Frontend)

### [PC Builder Back End](https://github.com/valentin30/PC_Builder_Backend)

### [PC Builder Admin](https://github.com/valentin30/PC_Builder_Admin)

### [PC Builder Products](https://github.com/valentin30/PC_Builder_Products)

<br/>

## PC Builder Admin

<br/>

### Description

This is an Administrator panel for processing orders and requesting couriers.

### Pages

#### Available Orders:
These are all payed orders that need to be processed.
![Screenshot from 2021-10-29 22-02-08](https://user-images.githubusercontent.com/57724836/139489481-a129f05e-5a42-4c88-9b54-f9166a355924.png)

#### Your Orders:
When you take an order from the available orders it goes to your orders tab (different for every administrator so there is no chance that two administrators are processing the same order).
![Screenshot from 2021-10-29 22-05-24](https://user-images.githubusercontent.com/57724836/139489560-fc4fdf54-e177-461e-a28e-5f2ef9fe93de.png)

#### Shipped Orders:
These are all your finished orders.
![Screenshot from 2021-10-29 22-05-39](https://user-images.githubusercontent.com/57724836/139489590-cf6bbbed-53c6-4227-92df-4e8ad4567252.png)

#### Order Page
##### On this page you can see the full information about an order like: 

information about the client.

information about the payment.

products in the order.

and files that need to be put on the packege before given to the courier.

##### Order status can be: 

AWAITING_PAYMENT - Order is not payed yet.

PAYMENT_FAILED - Payment of the order has failed.

PAYMENT_SUCCEEDED - Order is payed and is going to be placed in the available orders tab.

PROCESSING - Administrator has taken the order.

COURIER_REQUESTED - Administrator has finished processing your order and requested a courier.

SHIPPED - The requested courier has taken the order

![Screenshot from 2021-10-29 22-02-54](https://user-images.githubusercontent.com/57724836/139489528-99f1f20b-b2bd-4819-8ea3-384318be2eb0.png)

