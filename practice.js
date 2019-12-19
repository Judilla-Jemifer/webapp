=IF(B23="VQR Sponsor",
    IF(AND(C24<25000,D24<25000),"Option 1 and 2 are below our minimum cost",
                         IF(C24<25000,"Option 1 is below our minimum cost",
                            IF(B23="Sponsor", IF(C24<10000,"Option 1 is below our minimum cost","-")
                               ,
                                  IF(AND(B23="Academic",B24="USD"), IF(C24<3000,"Option 1 is below our minimum cost","-")
                                     ,
                                     IF(C24<4000,"Option 1 is below our minimum cost","-")))))                        
       ,
    IF(D24-C24<D24*40%,"Option 1 is too close to Option 2. Increase the difference or only offer Option 1.","-"))
===================================
=IF(D24-C24<D24*40%,"Option 1 is too close to Option 2. Increase the difference or only offer Option 1."
      ,
      IF(B23="VQR Sponsor", IF(AND(C24<25000,D24<25000),"Option 1 and 2 are below our minimum cost"
      ,
            IF(C24<25000,"Option 1 is below our minimum cost")), 
              IF(B23="Sponsor", IF(C24<10000,"Option 1 is below our minimum cost","-")
                               ,
                                  IF(B24="USD", IF(C24<3000,"Option 1 is below our minimum cost","-")
                                     ,
                                     IF(C24<4000,"Option 1 is below our minimum cost","-")))))
    




=IF(B23="VQR Sponsor",IF(AND(C24<25000,D24<25000),"Option 1 and 2 are below our minimum cost",IF(C24<25000,"Option 1 is below our minimum cost",IF(B23="Sponsor",IF(C24<10000,"Option 1 is below our minimum cost",IF(B24="USD",IF(C24<3000,"Option 1 is below our minimum cost",""),IF(C24<4000,"Option 1 is below our minimum cost","")))))),IF(D24-C24<D24*40%,"Option 1 is too close to Option 2. Increase the difference or only offer Option 1.",""))

=IF(
    B23="VQR Sponsor",
    IF(
        AND(C24<25000,D24<25000),"Option 1 and 2 are below our minimum cost",
                         IF(C24<25000,"Option 1 is below our minimum cost")),
                            IF(B23="Sponsor",
                               IF(C24<10000,"Option 1 is below our minimum cost",
                                  IF(B24="USD",
                                     IF(C24<3000,"Option 1 is below our minimum cost","-"),
                                     IF(C24<4000,"Option 1 is below our minimum cost","-")
                                    ))                        
       ,
    IF(D24-C24<D24*40%,"Option 1 is too close to Option 2. Increase the difference or only offer Option 1.","-")))