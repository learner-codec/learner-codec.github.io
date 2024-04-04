# Chapter 2 Exercises
## Exercises 2.1(a)

We know that in order for a set and operation to be a group they need to satisfy four properties. And an additional property of **commutative** for a group to be Abelian. Lets verify:

### Property: 1 -> Closure
This property states that if we arbitrarily choose two elements from the group and perform the operation allowed then the result will still be in the group.
Given a group $(R \backslash \{-1\},*)$ where the operation is given by:  
$$
a *b  := ab + a +b,      a,b \isin{R} \backslash \set{-1} 
$$
From the definiation -1 is not in R so if we can prove if a or b equals to -1 then the closure property is broken. form the above we get:  
$$
ab+a+b = -1 \\
ab+a+b+1 = 0 \\
a(b+1)+(b+1) = 0 \\
(a+1)(b+1) =0 \\
Either \quad a=-1 \quad b=-1 \\
$$
which is a contradiction so closure property is intacked

### Property: 2 -> assosiativity
we take a new element c from R
$$
(a*b)*c = (ab+a+b)*c \\
==> (ab+a+b)c + (ab+a+b) + c \\
==> abc+ac+bc + ab + a +b +c \\
==> abc + ab +ac +a + bc +b + c \\
==> a (bc+b+c) + a + bc +b +c \\
==> a (b*c) + a + (b*c)
==> a * (b*c)
$$
so the assisiativity property is intacked.

## Property: 3 -> Neutral Element
First we want to find the identity element we see that
$$
a * 0 = a.0 + a + 0 \\
==>a
$$
the identity element is 0. which exists

## Property: 4 -> Inverse Element
Now we take:
$$
x*y = 0 \\
and \quad solve \quad for \quad y \\

xy + x + y = 0 \\
xy +y = -x \\
y = \frac{-x}{x+1}
$$
Which always exists since x cannot be -1 according to the definiation.

For Our final proof (Abelian Group) we show that for any arbitrary x and y it holds that $ x*y = y*x $
$$
x*y = xy + x +y \\
==> yx + y + x
==> y*x
$$
So  $ (\R \backslash \set{-1}) $ is an abelian group

## Exercises 2.1(b)

In the abelian group solve 3*x*x  = 15
From the properties we get
$$
3*(x*x) = 3 * (x^2+2x) \\
==> 3x^2 + 6x + 3 + x ^2 +2x \\
==> 4x^2 +8x +3 = 15 \\
==> 4x^2 + 8x -12 = 0 \\
==> x^2 + 2x +1 -4 = 0 \\
==> (x+1)^2 = 4 \\
==> x+1 = +- 2 \\
==> x = 1 \quad x= -3
$$

## Example 2.2(a)
First we need to check if the operation is well defined. that is to say that for any representative of congruence classes do we get the same answer at the end?  
Let $a_1$,$a_2$ $\isin\Z$ and $b_1$,$b_2$ $\isin\Z$ such that
 $\overline{a_1} = \overline{a_1} \quad and \quad \overline{b_1} = \overline{b_1}$ we neet to show that  $a_1\otimes b_1$ = $a_2\otimes b_2$  in orther words $\overline{a_1+b_1} = \overline{a_1+b_1}$.  
 by the definiation we know that two classes are equal $\overline{a_1} = \overline{a_2}$ in $\Z_n$ iff $a_1-a_2$ they are multiple of n, Lets say $a_1-a_2=k_1n$ and  $b_1-b_2=k_2n$ for $k_1,k_1 \isin{\Z}$. we get $(a_1-a_2)+(b_1-b_2)=n(k_1+k_2)$ then $(a_1+b_1) - (a_2+b_2) = n(k_1+k_2)$ so $\overline{(a_1+b_1)} = \overline{(a_2+b_2)}$ indeed. so the operation is valid.  

 Now lets prove the 5 properties in order to prove that it is an abelian group.  
 ### Property: 1 -> Closure
This property states that if we arbitrarily choose two elements from the group and perform the operation allowed then the result will still be in the group.
$$
\overline{a} \otimes \overline{b} = \overline{a+b} \isin{\Z_n}
$$
### Property:2 -> assosiativity
for a,b,c $\isin{\Z_n}$ we get  
$$
(\overline{a}\otimes\overline{b})\otimes\overline{c} = \overline{a+b}\otimes\overline{c} \\
==> \overline{a+b+c}
==>\overline{a} \otimes(\overline{b}\otimes\overline{c})
$$
### Property:3 -> Neutral Element
Here Indeed the neutral element is 0
$$
\overline{a}\otimes\overline{0} = \overline{a+0} = \overline{a}
$$

### Property:4 -> Inverse Element
Here the inverse element is $-\overline{a}$
$$
\overline{a} \otimes-\overline{a} = \overline{a-a} = \overline{0}
$$
### Proof abelian
For Our final proof (Abelian Group) we show that for any arbitrary x and y it holds that $ x*y = y*x $

$$
\overline{a} \otimes \overline{b} = \overline{a+b} = \overline{b+a} = \overline{b} \otimes \overline{a}
$$

## Exercise 2.2 (b)
for the ususal multiplication the neutral element is 1.
$$
\begin{array}{c|c|c}
a & b & a \otimes b \\
\hline
1 & 1 & 1 \\
1 & 2 & 2 \\
1 & 3 & 3 \\
1 & 4 & 4 \\
2 & 1 & 2 \\
2 & 2 & 4 \\
2 & 3 & 6 \\
2 & 4 & 8 \\
3 & 1 & 3 \\
3 & 2 & 6 \\
3 & 3 & 9 \\
3 & 4 & 12 \\
4 & 1 & 4 \\
4 & 2 & 8 \\
4 & 3 & 12 \\
4 & 4 & 16
\end{array}
$$
We see that indeed $\Z_5 \backslash \set{\overline{0}}$ is closed under $\otimes$. the neutral element 1; $a \times 1 =a$ also holds. and for the inverse element $ 1 \times\overline{1}^-1 =1 \quad 2 \times\overline{2}^-1 =1,3 \times\overline{3}^-1 =1,4 \times\overline{4}^-1 =1$  
and with the operation $\overline{a}\otimes\overline{b} = \overline{a\times b} = \overline{b\times a} = \overline{b}\otimes\overline{a}$ it is an abelian group

## Exercise 2.2 (c)

We see that the operation $\overline{2}\otimes\overline{4} = 0$ because the operation is not closed.

## Exercise 2.2 (d)

if n is prome then every integer (mod n) 1,...,n-1 is relatively prime to n. we choose a to be such a number.Then, by B'ezout's theorem, there exist integers u,v such that $au+nv=1$ here we choose a and n cause n is prime and a is nonzero, so those two numbers would be called relatively prime. thus we get 
$$
au + nv = 1 \\
\text{if we take the identity mod of n we get:} \\
\overline{au} \oplus \overline{nv} = 1 \\
\text{since nv is a multiple of n then $\overline{nv}=\overline{0}$ and we get} \\
\overline{au}=1 \\
\overline{a} \otimes \overline{u} = 1
$$
here $\overline{u}$ is the inverse element of A. similarly if we take a,b two relatively prime to n then ab cannot be a multiple of n so it mod n would not be zero on the results of the multiplication of (ab) so the operation is closed. other property follows easily. so it is a group.  

Now if n is not a prime number then we can say there would exist n = ab where $a<1\le b <n$ then $\overline{a}\otimes \overline{b} = \overline{ab} = \overline{n} = 0$ which is not closed. Thus it is not a group.

## Exercise 2.3
Since we can see the elements of $\mathbf{G}$ are groups of all upper triangualr matrix. In order to see if it is a valid group lets varify the definiations of group.

### Property 1: Closure
We know that the product(matmul product) of two upper triangular matrix is also an upper triangular matrix and since the operation perform element wise is either addition and multiplication $i.e \quad a_{i1}\times b_{1i}$. so the valurs are also in $R$. thus the closure property is satisfied.

### Property 2: Assosiativity
Given elements in the group are matrix the assotiavity of matrix multiplication also applies here.

### Property 3: Neutral Element

Incase of a matrix the neutral element is the  indentiy matrix where it has 1 in its diagonal and $x,y,z=0$. So Neutral element is satisfied

### Property 4: Inverse Element
An upper triangular matrix is invertable $iff$ all the diagonal elements are nonzero. In our case all of the elements in the group has nonzero element in the diagonal so each element of the group should have an inverse matrix such that $a.a^{-1} = I_3$.

### Property 5: Proof of Abelian
While standard Matrix multiplication doesnt hold true for AB=BA. Incase of the group $G$ if all $x,y,z=0 $ Then the commutative property holds otherwise it is violated. Thus $G$ is not always abelian.

## Exercise 2.4
a. Matrix multiplication is impossible cause the columns dim of the first matrix doesnt match with the row dim of the second matrix.  
### b.
$$
A = \begin{bmatrix}
  1 & 2 & 3 \\
  4 & 5 & 6 \\
  7 & 8 & 9 
\end{bmatrix}
,
B = \begin{bmatrix}
  1 & 1 & 0 \\
  0 & 1 & 1 \\
  1 & 0 & 1
\end{bmatrix} \\
the \ product \ of \ 
AB = \begin{bmatrix}
  4 & 3 & 5 \\
  10 & 9 & 11 \\
  16 & 15 & 17
\end{bmatrix}
$$
### c. 
$$
A = \begin{bmatrix}
  1 & 1 & 0 \\
  0 & 1 & 1 \\
  1 & 0 & 1
\end{bmatrix}
,
B = \begin{bmatrix}
  1 & 2 & 3 \\
  4 & 5 & 6 \\
  7 & 8 & 9 
\end{bmatrix} \\
AB = \begin{bmatrix}
  5 & 7 & 9 \\
  11 & 13 & 15 \\
  8 & 10 & 12 
\end{bmatrix} \\
$$

### d.
$$
A =\begin{bmatrix}
1 & 2 & 1 & 2 \\
4 & 1 & -1 & -4
\end{bmatrix}
,B =\begin{bmatrix}
0 & 3 \\
1 & -1 \\
2 & 1 \\
5 & 2
\end{bmatrix} \\
AB = \begin{bmatrix}
   14 & 6 \\
   -21 & 2 \\
\end{bmatrix}
$$
### e.
$$
A=\begin{bmatrix}
0 & 3 \\
1 & -1 \\
2 & 1 \\
5 & 2
\end{bmatrix} 
,
B =\begin{bmatrix}
1 & 2 & 1 & 2 \\
4 & 1 & -1 & -4
\end{bmatrix} \\
AB = \begin{bmatrix}
4 & 3 & -3 & -12 \\
-3 & 1 & 2 & 6 \\
6 & 5 & 1 & 0 \\
13 & 12 & 3 & 2
\end{bmatrix}
$$

## Exercise: 2.5
### a.
$$
A = \begin{bmatrix}
1 & 1 & -1 & -1 \\
2 & 5 & -7 & -5 \\
2 & -1 & 1 & 3 \\
5 & 2 & -4 & 2
\end{bmatrix}
,
b = \begin{bmatrix}
1 \\
-2 \\
4 \\
6
\end{bmatrix}
\\

$$
In order to get the solution for this inhomogenious linear system we first need to create a augmented matrix. then perform row operation to make it into row echelon form. The augmented matrix is:

$$
Augmented\ Matrix =
\left[
\begin{array}{cccc|c}
1 & 1 & -1 & -1 & 1 \\
2 & 5 &-7 & -5 & -2 \\
2 & -1 & 1 & 3 & 4 \\
5 & 2 & -4 & 2 & 6
\end{array}
\right]
$$
After doing gaussian elimination we found that:
$$
\left[
\begin{array}{cccc|c}
1 & 1 & -1 & -1 & 1 \\
0 & 3 &-5 & -3 & -4 \\
0 & 0 & -2 & 2 & 6 \\
0 & 0 & 0 & 0 & -11
\end{array}
\right]
$$
which shows that the last row of the matrix is all zero, so the only solution to this linear sysem is $x_1,x_2,x_3,x_4=0$;

### b.
$$
A = \begin{bmatrix}
1 & -1 & 0 & 0 & 1 \\
1 & 1 & 0 & -3 & 0 \\
2 & -1 & 0 & 1 & -1 \\
-1 & 2 & 0 & -2 & -1
\end{bmatrix}
,
b = \begin{bmatrix}
3 \\
6 \\
5 \\
-1
\end{bmatrix}
\\
Augmented  \ matrix = 
\left[
\begin{array}{ccccc|c}
1 & -1 & 0 & 0 & 1  & 3\\
1 & 1 & 0 & -3 & 0 & 6\\
2 & -1 & 0 & 1 & -1 & 5\\
-1 & 2 & 0 & -2 &  -1 &-1
\end{array}
\right]
$$
after elementary row operation we found the reduced row echelon form where all the other items in the pivot columns are zero:
$$
augmented \ matrix = 
\left[
\begin{array}{ccccc|c}
1 & 0 & 0 & 0 & -1  & 3\\
0 & 1 & 0 & 0 & -2 & 0\\
0 & 0 & 0 & 1 & -1 & -1\\
\end{array}
\right]
$$
Notice the last row has been deleted because it contains all zero.
now in order to find the solution we need to perform the **minus one trick**. now the new augmented matrix is:
$$
augmented \ matrix = 
\left[
\begin{array}{ccccc|c}
1 & 0 & 0 & 0 & -1  & 3\\
0 & 1 & 0 & 0 & -2 & 0\\
0 & 0 & -1 & 0 & 0 & 0\\
0 & 0 & 0 & 1 & -1 & -1\\
0 & 0 & 0 & 0 & -1 & 0\\
\end{array}
\right]
$$
This reviels the solutions space/ general solution with the columns containing -1(only the ones after minus one trick). and the right hand sides gives us the particular solution. so we obtain all possible solution as. 
$$
S:= \left[
\begin{array}{c}
3 \\
0 \\
0 \\
-1 \\
0
\end{array}
\right]
+ \lambda_1
\left[
\begin{array}{c}
0 \\
0 \\
-1 \\
0 \\
0
\end{array}
\right]
+
\lambda_2
\left[
\begin{array}{c}
-1 \\
-2 \\
0 \\
-1 \\
-1
\end{array}
\right] \\
where \ \lambda_1,\lambda_2 \isin \R
$$
## Exercise 2.6
$$
A = \begin{bmatrix}
0 & 1 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 & 1 & 0 \\
0 & 1 & 0 & 0 & 0 & 1 \\
\end{bmatrix}
,
b = \begin{bmatrix}
2 \\
-1 \\
1 \\
\end{bmatrix}\\
The \ augmented \ matrix:
\left[
\begin{array}{cccccc|c}
0 & 1 & 0 & 0 & 1 & 0 & 2 \\
0 & 0 & 0 & 1 & 1 & 0 & -1 \\
0 & 1 & 0 & 0 & 0 & 1 & 1 \\
\end{array}
\right]
$$
After gaussial elimination we get 

$$
\left[
\begin{array}{cccccc|c}
0 & 1 & 0 & 0 & 0 & 1 & 1 \\
0 & 0 & 0 & 1 & 0 & 1 & -2 \\
0 & 0 & 0 & 0 & 1 & -1 & 1 \\
\end{array}
\right]
$$
Now we can use **minus one trick**

$$
\left[
\begin{array}{cccccc|c}
-1 & 0 & 0 & 0 & 0& 0 & 0  \\
0 & 1 & 0 & 0 & 0 & 1 & 1 \\
0 & 0 & -1 & 0 & 0& 0 & 0  \\
0 & 0 & 0 & 1 & 0 & 1 & -2 \\
0 & 0 & 0 & 0 & 1 & -1 & 1 \\
0 & 0 & 0 & 0 & 0& -1 & 0  \\
\end{array}
\right]
$$
Now the particular solutions becoms the right hand side, and by using the **minus 1** we get the complete solution.
$$
S:= \begin{bmatrix}
0 \\
1 \\
0 \\
-2 \\
1 \\
0 \\
\end{bmatrix}+ \lambda_1
\begin{bmatrix}
-1 \\
0 \\
0 \\
0 \\
0 \\
0 \\
\end{bmatrix}+ \lambda_2
\begin{bmatrix}
0 \\
0 \\
-1 \\
0 \\
0 \\
0 \\
\end{bmatrix} + \lambda_3
\begin{bmatrix}
0 \\
1 \\
0 \\
1 \\
-1 \\
-1 \\
\end{bmatrix}; \lambda_1, \lambda_2 , \lambda_3 \isin \R
$$
#### Alternate solution
an alternative way that does not uses **minus one trick**:
for the particular solution we set all the free variables to zero. The particular solution remains unchanged. it can be varified from the formula. Now we see how to get the special solutions where Ax=0:  
for this we set one of the free variable to one and all the others to zero then solve the equation. the first ezuation gives:  
$$
setting \ x_1 = 1 \ we \ get \\
0*1 + x_2 =0 \\
x2=0 \\
so \ we \ get :
\begin{bmatrix}
1 \\
0 \\
0 \\
0 \\
0 \\
0 \\
\end{bmatrix} \\
similarly:
setting \ x_3 = 1 \ we \ get \\
0*1 + x_2 =0 \\
x2=0 \\
so \ we \ get :
\begin{bmatrix}
0 \\
0 \\
1 \\
0 \\
0 \\
0 \\
\end{bmatrix} \\
and \ setting \ x_6=1 \ we \ get :\\
x_2 + 1 = 0 \\
x_2 = -1 \\
\ second \ equation \\
x_4 +1 = 0 \\
x_4 = -1 \\
and \\
x_5 = 1 \\
so \ we \ get :
\begin{bmatrix}
0 \\
-1 \\
0\\
-1 \\
1 \\
1 \\
\end{bmatrix} \\
$$
Now if wew multiply these by $\lambda_1,\lambda_2,\lambda_3$ we get all the solutions. notice these solutons are the same except for the **sign(-1)** change.

## Exercise 2.7
Note that it is given $AX = 12X$, we can rewrite it as $AX-12X = 0$ or $AX- 12IX = 0$ we introdyce the identity matrix to make the substraction a bit easier and not that the given property suggests that 12 is an eigenvalue. Now this resembles a standard problem $AX=0$ 
subtracting $12I$ form A we get:
$$
A = \begin{bmatrix}
-6 & 4 & 3 \\
6 & -12 & 9 \\
0 & 8 & -12 \\
\end{bmatrix}
$$
now the constraines $\sum_{i=1}^3 x_i =1$ can be constructed to a third equation thus we get the following matrix:
$$
\left[
\begin{array}{ccc|c}
-6 & 4 & 3 & 0 \\
6 & -12 & 9 & 0 \\
0 & 8 & -12 & 0 \\
1 & 1 & 1 & 1\\
\end{array}
\right]
$$
Now we perform row reduction and get:
$$
\left[
\begin{array}{ccc|c}
1 & 0 & 0 & 3/8 \\
0 & 1 & 0 & 3/8 \\
0 & 0 & 1 & 1/4 \\
\end{array}
\right]
$$
as we can see all the columns here are pivot columns so here there is only a specific solution. and the specific solution is:
$$
X = 1/8 \begin{bmatrix}
3 \\
3 \\
2
\end{bmatrix}
$$
## Exercise 1.8
Determine if the inverse exist
### a.

$$
\left[
\begin{array}{ccc|ccc}
2 & 3 & 4 & 1 & 0 & 0 \\
3 & 4 & 5 & 0 & 1 & 0 \\
4 & 5 & 6 & 0 & 0 & 1 \\
\end{array}
\right]
$$
after slight row reduction we find:
$$
\left[
\begin{array}{ccc|ccc}
-1 & 0 & 1 & 4 & -3 & 0 \\
0 & 1 & 2 & 0 & 4 & -3 \\
0 & 5 & 10 & 16 & -12 & 1 \\
\end{array}
\right]
$$
We see that row 3 is a linear combination of row 2 (5* row 2), therefore this system of linear equation is not solvable so it doesnt have any inverse.

### b.
$$
\left[
\begin{array}{cccc|cccc}
1 & 0 & 1 &0 & 1 & 0 & 0 & 0 \\
0 & 1 & 1 & 0 & 0 & 1 & 0 & 0 \\
1 & 1 & 0 & 1 & 0 & 0 & 1 & 0 \\
1 & 1 & 1 & 0 & 0 & 0 & 0 & 1 \\
\end{array}
\right]
$$
after row reduction we get:
$$
\left[
\begin{array}{cccc|cccc}
1 & 0 & 0 &0 & 0 & -1 & 0 & 1 \\
0 & 1 & 0 & 0 & -1 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 & 1 & 1 & 0 & -1 \\
0 & 0 & 0 & 1 & 1 & 1 & 1 & -2 \\
\end{array}
\right]
$$
therefore the inverse of matrix b is:
$$
\left[
\begin{array}{cccc}
0 & -1 & 0 & 1 \\
-1 & 0 & 0 & 1 \\
1 & 1 & 0 & -1 \\
1 & 1 & 1 & -2 \\
\end{array}
\right]
$$

## Exercise 2.9
Let a vector $\ V$ be a vector space. then $U\subseteq V$ is a vector subspace if $U \neq \emptyset$ meaning it should at least contain one element and the zero vector {0,0,0} needs to be in the subspace also it should satisfy inner and outer operation under the closure condition. now lets varify

### A.
#### 1. Zero vector:
A is given by $A = {(\lambda,\lambda + \mu^3,\lambda + \mu^3 ) | \lambda,\mu \isin \R}$ so this states that (0,0,0) is present in $A$.
#### 2. Closure under inner operation
let a vector a,b be $a = (\lambda_1,\lambda_1 + \mu_1^3,\lambda_1 - \mu_1^3 ) $ and  $b = (\lambda_2,\lambda_2 + \mu_2^3,\lambda_2 - \mu_2^3 ) $
$$
a+b = (\lambda_1,\lambda_1 + \mu_1^3,\lambda_1 - \mu_1^3 ) + (\lambda_2,\lambda_2 + \mu_2^3,\lambda_2 - \mu_2^3 ) \\
==> (\lambda_1 + \lambda_2) + ((\lambda_1 + \lambda_2)+(\mu_1^3+\mu_2^3)) + ((\lambda_1 - \mu_1^3) + (\lambda_2 - \mu_2^3)) \\
==> (\lambda_1 + \lambda_2) + ((\lambda_1 + \lambda_2)+(\mu_1^3+\mu_2^3)) + ((\lambda_1 + \lambda_2) - (\mu_1^3 + \mu_2^3))
$$
which is also in the vector subspace.

#### 3. Closure under outer operation
let $\alpha \isin \R$
$$
\alpha.a = (\lambda_1,\lambda_1 + \mu_1^3,\lambda_1 - \mu_1^3 ) \\
==> (\alpha.\lambda_1,\alpha.\lambda_1 + \alpha.\mu_1^3,\alpha.\lambda_1 - \alpha.\mu_1^3 ) \isin A
$$
Therefore A is in $R^3$
### B.
We see that here multiply by a scalar -1 goes outside of B, therefore it is not a vector subspace.

### C.
It is only a vector subspace if and only if $\lambda =0$. otherwise it will not contain the zero vector.
### D.
Although D can contain a zero vector, it is not a subspace because multiplication by a rational number is not in D.

## Exercise 2.10
### a.
We see that these sets of vectors are linearly dependent as $2*x_1 - x_2 = x_3$ 
### b.
 These sets of vecotors are linearly independent.

 ## Exercise 2.11
 in order to write y as the linear combination of $x_1,x_2,x_3$ we need to find $\lambda_1,\lambda_2,\lambda_3$ such that $\sum_i^{3}\lambda_i.x_i=y$. now we solve the system of inhomogeneous linear equation system.

 $$
 augmented \ matrix = \left[ \begin{array}{ccc|c} 
 1 & 1 & 2 & 1 \\
 1 & 2 & -1 & -2 \\
 1 & 3 & 1 & 5 \\
 \end{array} \right]
 $$
 After gaussian elimination we find:
$$
\left[ \begin{array}{ccc|c} 
 1 & 0 & 0 & -6 \\
 0 & 1 & 0 & 3 \\
 0 & 0 & 1 & 2 \\
 \end{array} \right]
 $$
from this from we can easily get the values $\lambda_1=-6; \lambda_2 = 3;\lambda_3=2$

## Exercise 2.12
before we procceed we need to varify if the vectors given for $U_1 \ and \ U_2$ are linearly dependent or not. that is to saying that whether the vectors given for these subspace can be written as the linear combination of other vectors in the subspace,To see whether the three vectors are linearly dependent,we need to find a linear combination of these vectors that allows a non-trivial representation of 0. i.e $\lambda_1, \lambda_2,\lambda_3 \isin \R $ such that:
$$
\lambda_1 \begin{bmatrix}1 \\1 \\-3 \\1 \\
\end{bmatrix} + \lambda_2 \begin{bmatrix}2 \\-1 \\0 \\-1 \\
\end{bmatrix} + \lambda_3 \begin{bmatrix}-1 \\1 \\-1 \\1 \\
\end{bmatrix} = \begin{bmatrix}0 \\ 0 \\0 \\0\end{bmatrix}
$$
from gaussian elimination we see that only the first two columns are linearly dependent so the entire subspaces can be represented as the linear combination of the first two columns.

$$
U_1 = span[ \begin{bmatrix}1 \\1 \\-3 \\1 \\
\end{bmatrix} +  \begin{bmatrix}2 \\-1 \\0 \\-1 \\
\end{bmatrix} ]
$$
now for $U_2$ we get:
$$
\alpha_1 \begin{bmatrix}-1 \\-2 \\2 \\1 \\
\end{bmatrix} + \alpha_2 \begin{bmatrix}2 \\-2 \\0 \\0 \\
\end{bmatrix} + \alpha_3 \begin{bmatrix}-3 \\6 \\-2 \\-1 \\
\end{bmatrix} = \begin{bmatrix}0 \\ 0 \\0 \\0\end{bmatrix}
$$
we use gaussian elimination to determine the linearly independent columns. and we get:
$$
U_2  = span[ \begin{bmatrix}-1 \\-2 \\2 \\1 \\
\end{bmatrix} +  \begin{bmatrix}2 \\-2 \\0 \\0 \\
\end{bmatrix} ] 
$$
Now let a x be $U_1 \cap U_2 $ we can write it as follows:
$$
\lambda_1\begin{bmatrix}1 \\1 \\-3 \\1 \\
\end{bmatrix} + \lambda_2 \begin{bmatrix}2 \\-1 \\0 \\-1 \\
\end{bmatrix} = \alpha_1 \begin{bmatrix}-1 \\-2 \\2 \\1 \\
\end{bmatrix} + \alpha_2 \begin{bmatrix}2 \\-2 \\0 \\0 \\
\end{bmatrix}
$$
from the third component we see we need $-3 \lambda1 = 2 \alpha_1$ or $-3/2 \lambda_1 = \alpha_1$
$$
\lambda_1\begin{bmatrix}1 \\1 \\-3 \\1 \\
\end{bmatrix} + \lambda_2 \begin{bmatrix}2 \\-1 \\0 \\-1 \\
\end{bmatrix} = -3/2\lambda_1\begin{bmatrix}-1 \\-2 \\2 \\1 \\
\end{bmatrix} + \alpha_2 \begin{bmatrix}2 \\-2 \\0 \\0 \\
\end{bmatrix} \\
==> \lambda_1\begin{bmatrix}1 \\1 \\-3 \\1 \\
\end{bmatrix} +3/2\lambda_1\begin{bmatrix}-1 \\-2 \\2 \\1 \\
\end{bmatrix} + \lambda_2 \begin{bmatrix}2 \\-1 \\0 \\-1 \\
\end{bmatrix} = \alpha_2 \begin{bmatrix}2 \\-2 \\0 \\0 \\
\end{bmatrix} \\
 ==> \lambda_1 \begin{bmatrix} -1/2 \\ -2 \\ 0 \\5/2 \end{bmatrix} +  \lambda_2 \begin{bmatrix}2 \\-1 \\0 \\-1 \\
\end{bmatrix} = \alpha_2 \begin{bmatrix}2 \\-2 \\0 \\0 \\
\end{bmatrix} \\
$$
again we see in order for the last component to be zero it requires that $ 5/2 \lambda_1 - \lambda_2 = 0  \ or \ \lambda_2 = 5/2 \lambda_1$
we plug that in and get:

$$
\lambda_1 \begin{bmatrix} 9/2 \\ -9/2 \\ 0 \\0 \end{bmatrix} = \alpha_2 \begin{bmatrix}2 \\-2 \\0 \\0 \\
\end{bmatrix} \\
$$
Now $\alpha_2$ can be written as $9/4 \lambda_1$ plugging the replacement for all $\alpha$ we get:
$$
x = -3/2\lambda_1\begin{bmatrix}-1 \\-2 \\2 \\1 \\
\end{bmatrix} + 9/4 \lambda_1\begin{bmatrix}2 \\-2 \\0 \\0 \\
\end{bmatrix} \\
==> -6\lambda_1\begin{bmatrix}-1 \\-2 \\2 \\1 \\
\end{bmatrix} + 9 \lambda_1\begin{bmatrix}2 \\-2 \\0 \\0 \\
\end{bmatrix} \\
==>  \lambda_1\begin{bmatrix}24 \\-6 \\-12 \\-6 \\
\end{bmatrix}
$$
thus we have:
$$
U_1 \cap U_2 = \left\{ \lambda_1 \begin{bmatrix}4 \\ -1 \\-2 \\-1\end{bmatrix} \right\} \isin \R
$$
## Exercise 2.13
### a
we see that both $U_1,U_2$ has a rank of 2, so the nulity of A must be 1, therefore the dimmension of $U_1,U_2$ is 1. since it is the kernel of their respective A. Another way to think of it is after finding the rank we can see that the vecort that maps A to zero has a dimension of 1,or only one column, therefore the dimension is one.

### b.
From the second approach we can find the basis for $U_1$ and $U_2$ which spans the whole space.

$$
U_1,U_2 =\left[
\begin{array}{}1 \\1 \\-1\end{array}\right]
$$
### c.
since $U_1$ and $U_2$ are spanned by the same vector thus the basis for their intersection would be the same. which is:

$$
U_1 \cap U_2 =span[\left[
\begin{array}{}1 \\1 \\-1\end{array}\right]]
$$


## Exercise 2.14

### a.
Note that the metrices are the same as the previous but now instead of being the solution space it is spanned by the columns of $A_1,A_2$ therefore the dimentions would be the same as $A_1,A_2$. in this case the dimention of $U_1,U_2$ is 2.

### b.
The basis could also be achieved from the previous section. the basis are. 
$$
basis(U_1) = \left\{ 
\left[\begin{array}{c}1  \\ 1  \\ 2  \\ 1\\\end{array} \right],
\left[\begin{array}{c}0  \\ -2  \\ 1  \\ 0\\\end{array} \right] 
\right\};
basis(U_2) = \left\{ 
\left[\begin{array}{c}3  \\ 1  \\ 7  \\ 3\\\end{array} \right],
\left[\begin{array}{c}-3  \\ 2  \\ -5  \\ -1\\\end{array} \right] 
\right\}
$$

### c.
Let the vectors $b_1,b_2$ and $c_1,c_2$ be the bases for B and C in $R^4$. we get $x \isin U_1 \cap U_2 \iff \exists \lambda_1,\lambda_2,\lambda_3,\lambda_4 \isin R: (x=\lambda_1 b_1 + \lambda_2 b_2 ) \wedge (x=\lambda_3 c_1 + \lambda_4 c_2 ) $
$$
\iff (\lambda_1 b_1 + \lambda_2 b_2 -\lambda_3 c_1 - \lambda_4 c_2 =0)
$$
here we need to find for which $\lambda_1,\lambda_2,\lambda_3,\lambda_4 \isin R$ the above equation will be the same or equal to zero.

We se that it becomes the equation $A\lambda = 0$. now we do gaussian elemination to the solution space it will give us the values for  $\lambda_1,\lambda_2,\lambda_3,\lambda_4$ that will make the equation possible . where $b_1,b_2,-c_1,-c_2$ can be represented as the column matrix of A.

$$
\left[ \begin{array}{cccc} 
 1 & 0 & -3 & 3 \\
 1 & -2 & -1 & -2 \\
 2 & 1 & -7 & 5 \\
 1 & 0 & -3 & 1 \\
 \end{array} \right]
 $$
 after row reduction using gaussian elimination we get.
 $$
\left[ \begin{array}{cccc} 
 1 & 0 & -3 & 0 \\
 0 & 1 & -1 & 0 \\
 0 & 0 & 0 & 1 \\
 \end{array} \right]
 $$
 so the solution spave will be:
 $$
 S:=span[ \begin{bmatrix} -3 \\ -1 \\ -1 \\ 0\end{bmatrix} ]
 $$
 so we get $[ \begin{bmatrix} \lambda_1, \lambda_2, \lambda_3, \lambda_4 \end{bmatrix} = \alpha \begin{bmatrix} -3, -1, -1, 0 \end{bmatrix} ]$
 we know that $b_1 = -3 \ and \ b_2=1$ from the equation $x=\lambda_1 b_1 + \lambda_2 b_2$ we plug the values and we get:
 $x= -3b_1 - b_2$ we get $x=[-3,-1,-7,-3]^T$ therefore:
 $$
 U_1 \cap U_2 = span[\begin{bmatrix} -3 \\ -1 \\ -7 \\ 3 \end{bmatrix} ]
 $$


## Exercise 2.15
### a.
We have $F={(x,y,z) \isin R^3 | x+y-z = 0}$ and $G={(a-b,a+b,a-3b) | a,b \isin R}$

we need to show the zero vecotr is in F and G. 
let $x=0,y=0,z=0 and a=0,b=0,c=0$  
we see that (0,0,0) are both in F and G.
for the second property we need to prove that the closure condition is met.
With respect to the outer operation we get  
let $\lambda \isin R$. 
$$
\lambda.F = (\lambda x,\lambda y,\lambda z) \\
\lambda x + \lambda y- \lambda z = 0 \\
\lambda (x+y-z) = 0 \\
\lambda . 0 = 0 \isin F
$$ 
similarly
$$
\lambda G = (\lambda(a-b),\lambda(a+b),\lambda(a-3b)) \\
==> \lambda a - \lambda b , \lambda a + \lambda b , \lambda a -  \lambda 3b \\
here \ \lambda a,\lambda b \isin R \ therefore \ \lambda x \isin R^3
$$

and with respect to the inner product.
let $a=(x,y,z) \ and \ b=(x',y',z')\isin R^3$ be the elements of F, we have
$$
a+b = (x+y-z) + (x'+y'-z') = 0 \\
==> 0 + 0 = 0 \isin F
$$
now let $x=(a-b,a+b,a-3b) \ and \ y=(a'-b',a'+b',a'-3b') \isin R^3$ are the elements of G. and a,b $\isin R$
we have:
$$
x+y = ((a+a)'-(b+b'),(a+a')+(b+b'),(a+a')-3(b+b')) \isin G
$$
therefore both F and G is a subspace of $R^3$

### b.
here we can leverage the constrains of F, we plug the element of g into F thus we get. 
$$
a-b + a+b - a+3b = 0 \\
a + 3b = 0 \\
a = -3b \\
$$
we plug it back G and we get:
$$
F \cap G = {(-4b,-2b,-6b)} = span[(2,1,3)^T]
$$

### c.
we see that F is a subspace of $R^3$ with one linear constrains thus it has a dimention of 2 because we are restricting one independent variable with that condition, form this constrains we can restrict z. thus we get the basis of F:
$$
\left\{\begin{bmatrix} 1 \\ 0 \\1\end{bmatrix},\begin{bmatrix} 0 \\ 1 \\1\end{bmatrix} \right \}
$$ 
to determine the basis of G we need to use two variable for substitution. because by using these new variable we will be able to manipulate the elements of G.  
let $u=:a-b$ and $v=:a+b$ then we have $$a = (u+v)/2$$ and $$b =(v-u)/2 $$ similarly we can get 
$$a-3b = (u+v-3v+3u)/2 \\ 
a-3b = 2u-v
$$
thus we have $(u,v,2u-v)\isin G$, we can see that the dimension is clearly 2. we can get the basis for G as:
$$
\left\{\begin{bmatrix} 1 \\ 0 \\2\end{bmatrix},\begin{bmatrix} 0 \\ 1 \\-1\end{bmatrix} \right \}
$$ 
now inorder to get the basis for $F \cap G$ let $x\isin R^3$ it holds that $x \isin F \cap G \iff \exists\lambda_1, \lambda_2,\mu_1,\mu_2 \isin R : (x = \lambda_1 \begin{bmatrix} 1 \\ 0 \\1\end{bmatrix} + \lambda \begin{bmatrix} 0 \\ 1 \\1\end{bmatrix}) \wedge (x=\mu_1 \begin{bmatrix} 1 \\ 0 \\2\end{bmatrix} + \mu_2\begin{bmatrix} 0 \\ 1 \\-1\end{bmatrix})$
we can construct a matrix A where all the basis vector becomes the columns of A and the unknowns becomes x then we can solve for Ax=0.  
the matrix:
$$
\left[
  \begin{array}{} 1 & 0 & -1 & 0 \\ 0 & 1 & 0 & -1 \\ 1 & 1 & -2 & 1\end{array}
\right]
$$
after row reduction:
$$
\left[
  \begin{array}{} 1 & 0 & 0 & -2 \\ 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & 2\end{array}
\right]
$$
we find the solution to be $[-2,-1,-2,-1]$. now we have 
$$x = -2 \left[\begin{array}{}1 \\ 0 \\1 \end{array}\right] - \left[\begin{array}{}0 \\ 1 \\1 \end{array}\right] \\ 
==> \left[\begin{array}{}-2 \\ -1 \\-3 \end{array}\right] or \left[\begin{array}{}2 \\ 1 \\3 \end{array}\right]
$$
which gives us the same answer as part b.
## Exercise 2.16
in order to prove a linear mapping we need to check if the two condition is satisfied.
#### if $\phi$ is a linear map that maps F to E then, for x,y in F and $\lambda$ in R. we need to show:
$\phi(x+y) = \phi(x)+\phi(y) \ and \ \phi(\lambda x) = \lambda \phi(x)$
### a.
#### property 1.
let $f,g \isin L^1[a,b]$
$$
\phi(f+g) = \int_{a}^{b} (f+g)(x)dx
==> \int_{a}^{b} f(x)+g(x)dx \\
==> \int_{a}^{b} f(x)dx + \int_{a}^{b} g(x)dx \\
==> \phi(f) + \phi(g)
$$
#### property 2.
let $\lambda \isin R$
$$
\phi(\lambda f) = \int_a^b \lambda f(x) dx \\
==> \lambda \int_a^b  f(x) dx 
==> \lambda \phi(x)
$$
therefore a is a linear mapping.

### b
#### property 1.
let $f,g \isin C^1$
$$
\phi(f+g) = f' + g' = \phi(f) + \phi(g)
$$
#### property 2.
let $\lambda \isin R$
$$
\phi(\lambda f) = (\lambda f)' = \lambda \phi(f)
$$
therefore it is also a linear mapping

### c.
#### property 1.
let $x,y \isin R$
$$
\phi(x+y) = cos(x+y) = cos(x)cos(y)-sin(x)sin(y)
$$
which is not satisfied. also if we set x to zero then we get 1, so mapping to zero is also not satisfied. herefore it is not a linear mapping.

### d.
We know from 2.7.1 that any matrix transformation like this is indeed linear. This comes from distributive properties of matrix multiplication.

### e.
same as previous

## Exercise 2.17
### a.
the transformation matrix is:
$$
A_{\phi} = \begin{bmatrix}3 & 2 & 1 \\ 1 & 1 & 1 \\ 1 & -3 & 0 \\ 2 & 3 & 1\end{bmatrix}
$$
### b.
$$
A_{\phi} = \begin{bmatrix}3 & 2 & 1 \\ 1 & 1 & 1 \\ 1 & -3 & 0 \\ 2 & 3 & 1\end{bmatrix}
$$
after row reduction we get:
$$
\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}
$$
therefore the rank is 3.
### c.
from b we see that all the columns of the transformation matrix is linearly independent therefore only trivial solution is possible. there is only zero vector in the kernel. $dim(ker(A_{\phi}))=0$ and $dim(img(A_{\phi}))=rank(A_{\phi})=3$

## Example 2.18
### automorphism: if a mapping is both linear($\phi(x+y) = \phi(x)+\phi(y) \ and \phi(\lambda x)=\lambda \phi(x)  \ for \ all\  x,y\isin V$  ) and bijective(injective and surjective)  then the mapping is called a automorphism. 
since we are mapping f and g to E. let $x \isin ker(f) $ therefore f(x) must be zero. now we can take f(x) as the input of the mapping g then we get. $g(f(x)) =g(0)=0)$ therefore $ker(f) \subseteq ker(g o z)$ always holds. now let $x\isin ker(gof)$ we have g(f(x))=0 and as f is linear f(g(f(x))) = 0. now we have (fog)(f(x)) = 0 , since $fog = id_E$  here (fog) is a composite function meaning first apply f to f(x) the apply g to f(x) which are all zero. another property we can use is that fog is identity that means it doesnt change the mapping f(x) at all therefore it remains zero. so we have $fog = 0$ for $x\isin ker(gof)$ this essentially means $ker(gof)\subseteq ker(f)$ thus ker(gof) = ker(f)  


let $y\isin in(g \circ f)$ and $x\isin E$ such that $y=(g\circ f)x$ then $y = g(f(x))$ so this immediately follows that $im(g \circ \ f) \subseteq im(g)$
now let $y \isin im(g)$ and $x \isin E$ such that y = g(x) we have $y = g((f\circ g)(x))$ thus $y = (g \circ f)g(x)$ so we have $im(g) \subseteq im(g \circ f)$ therefore $im(g) = im(g \circ f)$  

let $y\isin ker(f) \cap im(g)$ and $x \isin E$ so that $y=g(x)$. applying f to both side we have $f(y) = (f \circ g)x$. since y is in ker(f) we have $x = 0$ cause $f \circ g$ is indentity. this means that $y\isin ker(f) \cap im(g) \subseteq {0}$, we also have that the intersection between two subspace is also a subspace thus also contains zero therefore   $y\isin ker(f) \cap im(g) =  {0}$

## 2.19
### 1
from the vectors we can clearely see that $B=(b_1,b_2)$ and $B' = (b'_1,b'_2)$ are clearly linearly indemended. thus they are two bases of $R^2$. lets draw it:

lets consider a vector in canonical basis of $R^2$, $x=2e_1 + 3_e2$
to project this vector into $R^2$ with a basis of B, we need to find the transformation matrix, we can follow Example 2.21 to do so. we find the transformation matrix $A\phi_B = \begin{bmatrix}1&-1 \\ 1&-2\end{bmatrix}$ using this we can find a represention of the vector x with basis B. we find that the coeffecient for x is $\begin{bmatrix}-1 \\ -4\end{bmatrix}$  
We can do the same thing with $B'$ and find the coefficient to be $\begin{bmatrix}-1/4 \\ 5/2\end{bmatrix}$  
![Figure](blogposts/resources/drawing_basis.png)

### 2
In the previous part we sort of gloss over the idea of representing a bssis in terms of another basis. Now lets go through the process.

in toder to find the matrix $P_1$ we can think of it like this. Because they are both basis of $R^2$ there is a transformation mattrix that converts the basis vector $b_1,b_2$ to $b'_1,b'_2$. in other words we need to express $b'_1,b'_2$ by a linear combination of the vactor $b_1,b_2$. Lets first do it for $b'_1$. We can expres $b'_1$ as $b'1 = \lambda_1 b_1 + \lambda_2b_2$. Now we can solve this equation using gaussian elimination.(i.e find the coefficiend $\lambda_1,\lambda_2$)
$$ 
\left[
\begin{array}{cc|c}2 & -1 & 2 \\ 1 & -1 & -2 \end{array}  
\right]
$$
after gaussian elimination we get.
$$ 
\left[
\begin{array}{cc|c}1 & 0 & 4 \\ 0 & 1 & 6 \end{array}  
\right]
$$
simmilarly we can do it for $b'_2$ aswell.
$$ 
\left[
\begin{array}{cc|c}2 & -1 & 1 \\ 1 & -1 & 1 \end{array}  
\right]
$$
after gaussian elimination we get.
$$ 
\left[
\begin{array}{cc|c}1 & 0 & 0 \\ 0 & 1 & -1 \end{array}  
\right]
$$
Thus by combining $\lambda's$ from both operation we can find $P_1$ that performs the basis change.
$$ 
P_1 = \left[
\begin{array}{cc}4& 0  \\ 6 & -1 \end{array}  
\right]
$$

### 3
#### a
First lets create the matrix C that holds the basis as the columns:

$$
\left[\begin{array}{} 1&0&1\\2&-1&0\\-1&2&-1\end{array}\right]
$$
Now we can use Laplace Expansion to get the determinant of the matrix. If the determinant is non-zero then the matrix is invertable thus a full rant matrix. and we know that a full rank matrix can be the basis for a vector space. the formula for laplace expansion if we expand along the r ow is:
$\sum_{k=1}^n(-1)^{k+j}a_{jk}det(A_{j,k})$ where $A_{j,k}$ is the submatrix that we objain after deleting row k and column j.  
By following this formula we get:

$$
setting \ j = 1,k=1 \ we \ get: \ (-1)^{1+1}.1.det(\begin{bmatrix}-1&0\\2&-1\end{bmatrix}) = 1 \\
setting \ j = 1,k=2 \ we \ get: \ (-1)^{1+2}.0.det(\begin{bmatrix}2&0\\-1&-1\end{bmatrix}) = 0 \\
setting \ j = 1,k=3 \ we \ get: \ (-1)^{1+3}.1.det(\begin{bmatrix}2&-1\\-1&2\end{bmatrix}) = 3 \\
$$
Now by adding all of them together we get **det(C)=4** $\neq0$. Thus C is the basis of $R^3$.
Note: the process of calculating the determinant of a 2x2 matrix is given as follows.
$$
\det(A) = ad - bc
$$

#### b
We need to detetrmine the matrix $P_2$ that performs the basis change from $C$ to $C'$ .
In other words we need to express $C$ as the linear combination of the columns of $C'$. But since $C'$ is a standerd basis it is sufficient to show that $c = 1c_1'+2c_2'-1c'_3$. So the transformation matrix $P_2$ can be written as:
$$
P_2 = \left[\begin{matrix}1 & 0 & 1 \\ 2 & -1 & 0 \\ -1 & 2 & -1\end{matrix}\right]
$$
Note that this is oly possible bacause $C'$ is the standerd basis of $R^3$. If it was not the standard basis then we would have followed the steps taken in part a.

### 4.
Homomorphism: Is any type of operation that preserves the structure of a set in the target domain.  
Now in order to determinine the transformation matrix we can add and substract the two given equation.
$$
\phi(b_1+b_2) + \phi(b_1-b_2) = c_2+c_3+2c_1-c_2+3c_3 \\
\phi(b_1+b_2) + \phi(b_1-b_2) = 2c_1+4c_3 \\
$$
From the homomorphism it is linear. thus we can process as followes.
$$
\phi(2b_1) = 2c_1 + 4c_3 \\
\phi(b_1) = c_1 + 2c_3
$$
Now for substraction
$$
\phi(b_1+b_2) - \phi(b_1-b_2) = c_2+c_3-2c_1+c_2-3c_3 \\
\phi(2b_2) = -2c_1 + 2c_2 -2c_3 \\
\phi(b_2) = -c_1 + c_2 - c_3 \\
$$
Thus 
$$
A_{\phi} = \left[
\begin{matrix}1 & -1 \\  0 & 1 \\2 & -1\end{matrix}
\right]
$$

### 5
In order to determine $A'$, the transformation matrix of $\phi$ with reespect to the ordered bases $B'$ and $C'$ we can resort to the equation 2.112. which states that:  
$\tilde{A_{\phi}} = T^{-1}A_{\phi}S$
Where $S \isin R^{n\times n}$ is the transformation matrix of $id_v$ that maps the coordinates with respect to $B'$ onto the coordinates with respect to $B$ ($B'$ to $B$) which is namely $P_1$ that we found in part 2. and $T^{-1}$ is the transformation matrix of $C$ that maps coordinates with respect to $C'$ onto coordinates with respect to $C$. `in our case the inverse of $P_2$` found in part 3b. Thus we can write it as follows:
$$
\tilde{A_{\phi}} = P_2 AP_1 \\
\tilde{A_{\phi}} = \left[\begin{matrix}1 & 0 & 1 \\ 2 & -1 & 0 \\ -1 & 2 & -1\end{matrix}\right]  \left[
\begin{matrix}1 & -1 \\  0 & 1 \\2 & -1\end{matrix}
\right] \left[
\begin{array}{cc}4& 0  \\ 6 & -1 \end{array}  
\right] \\ 

\tilde{A_{\phi}} = \left[\begin{matrix}0 & 2 \\ -10 & 3 \\ 12 & -4 \end{matrix}\right]
$$
