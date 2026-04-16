const categories_list = [
  {
    _id: 0,
    name: "Uso",
    description: "",
    photo: "",
    pathUrl: "",
    categories: [
      {
        _id: 1,
        name: "Gafas de ciclismo polarizadas",
        description: "",
        photo: "",
        pathUrl: "/gafas-de-ciclismo-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas de ciclismo polarizadas",
            pathUrl: "/gafas-de-ciclismo-polarizadas",
          },
        ],
      },
      {
        _id: 4,
        name: "Gafas de conducción polarizadas",
        description: "",
        photo: "",
        pathUrl: "/gafas-de-conduccion-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas de conducción polarizadas",
            pathUrl: "/gafas-de-conduccion-polarizadas",
          },
        ],
      },
      {
        _id: 5,
        name: "Gafas de pesca polarizadas",
        description: "",
        photo: "",
        pathUrl: "/gafas-de-pesca-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas de pesca polarizadas",
            pathUrl: "/gafas-de-pesca-polarizadas",
          },
        ],
      },
      {
        _id: 28,
        name: "Gafas tácticas polarizadas",
        description: "",
        photo: "",
        pathUrl: "/gafas-tacticas-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas tácticas polarizadas",
            pathUrl: "/gafas-tacticas-polarizadas",
          },
        ],
      },
      {
        _id: 29,
        name: "Gafas para aviador polarizadas",
        description: "",
        photo: "",
        pathUrl: "/gafas-para-aviador-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas para aviador polarizadas",
            pathUrl: "/gafas-para-aviador-polarizadas",
          },
        ],
      },
    ],
    recommendedeCategories: [],
  },

  {
    _id: 6,
    name: "Marcas",
    description: "",
    photo: "",
    pathUrl: "",
    categories: [
      {
        _id: 7,
        name: "Gafas kingseven polarizadas",
        description: "",
        photo:
          "data:image/png;base64,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",
        pathUrl: "/gafas-kingseven-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas kingseven polarizadas",
            pathUrl: "/gafas-kingseven-polarizadas",
          },
        ],
      },
      {
        _id: 8,
        name: "Gafas rayban polarizadas",
        description: "",
        photo:
          "data:image/png;base64,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",
        pathUrl: "/gafas-rayban-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas rayban polarizadas",
            pathUrl: "/gafas-rayban-polarizadas",
          },
        ],
      },
      {
        _id: 9,
        name: "Gafas arnette polarizadas",
        description: "",
        photo:
          "data:image/png;base64,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",
        pathUrl: "/gafas-arnette-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas arnette polarizadas",
            pathUrl: "/gafas-arnette-polarizadas",
          },
        ],
      },
      {
        _id: 10,
        name: "Gafas hawkers polarizadas",
        description: "",
        photo:
          "data:image/png;base64,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",
        pathUrl: "/gafas-hawkers-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas hawkers polarizadas",
            pathUrl: "/gafas-hawkers-polarizadas",
          },
        ],
      },
      {
        _id: 11,
        name: "Gafas dubery polarizadas",
        description: "",
        photo:
          "data:image/png;base64,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",
        pathUrl: "/gafas-dubery-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas dubery polarizadas",
            pathUrl: "/gafas-dubery-polarizadas",
          },
        ],
      },
      {
        _id: 12,
        name: "Gafas timberland polarizadas",
        description: "",
        photo:
          "data:image/png;base64,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",
        pathUrl: "/gafas-timberland-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas timberland polarizadas",
            pathUrl: "/gafas-timberland-polarizadas",
          },
        ],
      },
      {
        _id: 13,
        name: "Gafas polaroid polarizadas",
        description: "",
        photo:
          "data:image/png;base64,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",
        pathUrl: "/gafas-polaroid-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas polaroid polarizadas",
            pathUrl: "/gafas-polaroid-polarizadas",
          },
        ],
      },
      {
        _id: 14,
        name: "Gafas eagle eyes polarizadas",
        description: "",
        photo:
          "data:image/png;base64,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",
        pathUrl: "/gafas-eagle-eyes-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas eagle eyes polarizadas",
            pathUrl: "/gafas-eagle-eyes-polarizadas",
          },
        ],
      },
      {
        _id: 15,
        name: "Gafas persol polarizadas",
        description: "",
        photo:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRYYGRgaGhwaGRwcHR4cHBocGhoZGhoaHRocJC4lIR4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBISHjQkISE0NDQxMTQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ/NDQ0NDE0PzQxP//AABEIAKIBNwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABCEAACAAQDBQUFBgMIAgMBAAABAgADBBESITEFQVFhcQYigZGhEzKx0fAHQlKCweEUYpIVI0NTcqKy8TPCJIPSY//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIREBAQACAgMAAgMAAAAAAAAAAAECESExEkFRAyITYXH/2gAMAwEAAhEDEQA/AEVHTzENF+PrHenpaO2t/wBf9xho1stfheEGyvb0Ihk2cijvED64QBP28i6Yj0yELZFmNqxVjut5mHMDx+EZyd2lAP3R1uflDqTb5c5lLXzyGnhDezxsaEL9WjpsIiSare4b+npHSucEMMdWw0+vSOsPr6MIGIpxY8YVx9f9RwGO3EAj1+vKOj6z/aFfhAFXtiVLyZrngM4Cxwn6P7Rw3+v+ozE7tb+CWfH5ExCnaw374KjpF8Uaxr8T9eEdAMBbO2mkxfeub6jS3DXWLAQs0GlTHcJh1jDgOkNBoAjjmJLZboRgBrw1hYZRK43xEwjKo0bOCHfj8IHGsFMbxqJTA3WO36/XhDHnombMo8oHXaskmwdSeo+cFF4uvrCLQz26fit5xKhBzGcNBuIQ5XHGO/W+OfWsRDi44wxmXl6Q8N9XhpmKDYsB4xQ3GvKHCYv4gIeHENxi8Bz2i/iB8RDcY4jzhxmLDgw1gOYhxHnChe0S2doUA1nUAknIcdLRmdodoAGwSh47z04CHbcr7gqvu3tyZt/gPrdFAiW6nU8TDH9trf177EFnc3dz0B+LfKJ5VPL3oD17x8zAqmJEeOkxxnUZuVvsb/Z8l9Za+Fx8IHm9nJZzluynn3h+h9YQqtwg2jnXMNQ3UFO1RTGzriT8QNx47x4+caKmrEmC4OfA/pxHOFIeIJ2yQTjlWRtSNFY/+p5jxjnljZzGvKXijiekcBgemn37rCzjIg6/XoYJtGd7NaK0ceYFBLGwAuSYcTFPtFjOmCnUZZEsDpbMmw8s98DSakr5k5/7pQEU2LNv5AcdOkFyNgScRdxjcm5LaX6fODqWQstAiCwAiZWizHnaWmpQygLCWgH+kfKAqzYlM+TS1BO9e6fSJazaKSzY3J4Dd1gajmma1xpqTHSM1T1XY9kOKncg8ND8j4+cHbKrJoBWelsNhjFrZ8V1HXSNMphOgOsTLlZfoK8dsY49Ng933eHDpy5R1AflGJVsdEdtyhC8KKGN0hjLEjaXMU+1NsogKocT8tB47+kTRHdo1iy8tW4fOApW0Hme54kmyjpxPSKREaaxLEkHNjx5eMW8p8IAGQGnKM2S8Ny6g0bESYP72Y7X1C2UfqfWGzOxlMc0aYh3HFi9CIbLqrQfJrLaxuSSajN5UdbsOqk96W3tFG4ZNbmhOfgfCObF2+mLDOBXcRz3ZHQxrJdaOMB7X2LJql7ws/3XX3hyP4hyMWSJbfaaW6tmoy8PWJgi8B6RiqabUUM0S5oLSz7rDQjl/wDnURsqaoDqGQggwsEgVeA8hCsLaD0jsdiDigcPQQgoO6FCv9WgOgDhEVRORBd2VRztnANTWO5KSRc6FtwiGn7MKxxz3Z2O4Gyjx1PpCc9LrXZs/tLTLoS3RcvW0KLX+xKe1vZL45/GFF0m4xVUtwnIHzvn+nlEASI5VepNr+BFvI8YORAwuDlF/FqSYr+bG+WwuGIJkzhBs1IEeXHSuciJCbxYyJoURXlbRwIYitFTVw4xbU1apjHS1I3xYU8wjfA01NTJWYAV7rj3W3H+VuK/DWBUqn93AWdbhhcXFvjrrvuOMQUlVzgbblagAYMGexVgOFsiTyz8+kc8sfcbxvqpK/abhG7gRtBc3bnlbIiAuyTj2rA6lMvA5xSpVZHF3juG7TW/hpBfZ+oX2jEGzKLjI2N9QTwtE34y2rZL030A19eE7ikYzpwHM2zjkys7l1BJOVvwnn9ZxVTRYlmNydTFnPLFRPKctZ73Y5EWJJ3FToRF/QSRLQLqd54n5RX0aEDE56A/dHzMSfxSA/qch5mFpIuUmxKJkZt9rqpIsvmSPRbQ9NtL/L5H5RYNJrA7Jh00+EV0vawO9PWC1rLj7tt8TLHZKktDcduEVe15rywrrgK3IYuLm40sL+HhFI+0LjvYfAAegjNumpNiNv7WDNhQ3C+p4xRtNxaxFUOCSRpAE+twmy5n0jUns36aXZyDCRz9IndbRRbHr2LWIzIy4EcI01NIE10RdXZV5jEQP1jF7abXspsFJNM9dPQOwRpktGzVVUEhiD94213DrB/ZXaC7UkTpdQiXRgAUXCQGBsV1sQQc40PaeWFoKhVFgshwByCED4Ri/saQ/wDyW3f3Y8RjP6xvTntU7HIkTJ0ps5kuYyNb3ygyUoNSL3JA/l3RNW1S48sN7d4KbqDia2e84cN+d4znaycj19S1xYTGHUrZT6gxBIq1/EPOK01FTJSehRwCD5g8Qdx5xlwZlFNwk4kb3TuYfAMN8WdNXr+IQXVolQhRiOR3qdxEGRdPUK6hlORhxcRkNlVzU8wy30vZv0YRrJU5GuFZWI1sQT4iMqlLCKrbNWFXApzOvSH7brfZpYGztpxtvIjJT6jK97mM5W9RvHH3W42dThEAGpFyeJMGB4rdh1yzZSn7ygKw4EAfGJdo16ylzNidN/pwjcnDFvImdUqouTYR2MbVVbscUzMH3SNOgNvQi8djWmdg9r7CVFxysW6662/mB4QGzzEtiW/PQnx0MXD7XwoSQcWlrZdekVUrbgUFHBZDfS11J/DfIjllyjjZuzTvLZP2OSvQ5NcHmP1EECViF1IPQiKt1Vu8neHSx8oIpLW3gxbllj/ZccaIeQRqD4xEwgpJrjRr8j+8dM4/elKegt8Is/LPcYuHwCTHVmWgmpKKmIy7XyGbXPMC+kAJQTZmncXidfrp5xuZS9M2Wdp6ic2C+i6E6X5Q6go0dGd5gQDIaEknlwiVdgIQAzjwAPqfnCfs2QvcdTvtfC3huv1jN3SWbRStiO7AGypqxvc2yyAG8xeS6STJDIB35lgvezxDMDpFNtNp0gpiY2Kg3U2Ybu9bIxAZxch3YswHdN9f3iauU5Xcl4T1O0nRSbOjB8LA5EWN7i4FwctYuKCb7RVdsmG45AnieHqIz7V4m/8Am+7ezHQj+beDff58YNlTGC41bK+ozFrZX5ZRNXHiLdZLepRydPE+6Om6HyqYXxOxdvT1zhlHWkrwv5HwMHS5671t0y9DGf5Z74TwvpE8pDqgbrcww0qf5a+sWKSw3un0+UcMjp5/ONzOek8Vd/CLuS3iYFq6pJVxmW/CD8Tujm2NqFAQhsN77/y8BzjPJSTJufuJxOrcwPnGpkeJ1ftQv7zZDQbhp65CAP49OflFxI2PLGWEueeZPhBE/ZKLk8nBfipX4xNxdVSyZqtob/HyMa7ZiyFQLLC4bZg2LE/zXzvGan7BHvSmIO5Tnc8BbOPS+yPZKlpzKTaMxDVzRiSQWsFF8gbe82XG17gXteLeU6YDa8gSpilFwqRcEaA7wPj4xN2JrC+0aZWGs1dNDa5/SPaNudhqaolFFHsmt3WTcd11NwR684857IbIly66RJfClVTTCrj/ADFCvhZeIKlTyjMx1dteW5p652oS9HUj/wDjM/4MYxPZSd/Z2ynqXHfmsXlr+IlQstRyOEt0Jj0aoZQrFrYApLXzGG2dxwtePnTtZ23asnk2KyE7spPu4dzsp+8cugyHPbEU81nZixzZiWY8SSST5kwlLD7piSXVS30IU+Y+Y9YlKsBe1xxGY8xpBSkz7aiLWkq4qlm7yYkkVF88PQfePPkIXKQk2sNuyS6rMQXdbA21Kn5GxiqaqwMHW2MAZg5AjLdqdOWUcmLOnNgQE/yrkBzN8oDnbGqVv3Cba4SG9NYSy8lmuEk+qd2xMxYnj+nCIGSa6lkR2AyLBSQOWQ1gdJjLkynnlYjqDGq2Z2iVJYUqLqLLhAAPXPI8ct8FUGxNrPJmXvnoQcsQGqnnF+5E7v4yxOo0w9RFRVUn8RimEhJlizKRZSBwI32tmfPSKqXNmSWGoO79jESxrcYlgqPEajy+cKANmbdlH/yIFbja48iY7GtVlymW3cY3XcTu5HiIr9o7L9k2I5oT3bnfwvBct7RZXE1Cjbx5cCOmvgY45S43c6rtMvKavbKM/ADzhuNt3oYIajZWKtqDY/X1rEiUp3fCNsIFudb+d4vNk0a++1ifupllb7z8BygBZFhia1h8f2+UXOxtntYu4titYchpf4ws3DehDyy2uY37i3yXl5xKicoMSn4wQssCLJJNRnew0mTvIgsFVBJyAzJ3ACOEC1zu8IzO1do+1OBMkvrpiPyiCwmV8ueGRkBS4CnRr3te+u/0iTYHYOdNZpjMsqmHeMx8gRn7ove4yzyBjV9gOxCsEqagXT3pSEWxaWd+I4DQ66RB252y1S4lIR/DLdRh0dlyJbpbIcM9+WvQqqin2XLIaXTvWHe7zGlyydCwQDPPUEaxfbE2vQXCzKCVKU5YlAYDqMINvOM3s3ZUx3RJQxM58ObHgLXvy5xpe0ux5NFJRQA012uzG/dVdQg3C5HMgRiZWrY09V2HpHW8pfZki4KElc9DhJtbpaMJtbZL0zmW9uKtuYcR8t0b77P6ovSgE3wOyjpkwHheK/7S3TDJB9/ExHHDYX8L2i5YyzdhMrKw6vbd5QBWbRvcZ4Bqb+9+3xh1VPwgi/Xp+/zi02H2dNRRmpAJZJrAKMwyoACbcQ1z4co5XCeo6S+6z6UeM43GWqqf+TfL9dDZVK0xlRRdnIVepNhBUxYn2FPWXUyXb3VdbngDlfwveGK16ClBJ2ZSvNVA7qBiY5M7MQuueEXOg3CFsPtJIrZEwzlVSgJmI1mXCBfGLjMfA+EaOsplmo0txiVwVYcjHjHa/s7Momut2lP3Vb1wPbfl0No63jpynI/sNQJUV7uqYZUsmYqagXJEtTfhe/5YC+1SUxryQSrqiPLYara+n5gTGi+xyV3KlzqWRfBQxH/IwJ9stEVanqAMrNLfrky+mPyEWTgt5ehdm9oGopZE5hZnlqzDg1rOP6gY867SU4XtHRuB76KW/wBVpqZ+AXyjUfZbUYqBB+B3T/diHowjF7U2ss3bqMpBWVOlyT1XI/7mceBip7ep9omtSVB4SZh/2NHzGEQj3HI4XAHnhv6R9TVtOJkt5be66Mh42YFT8Y8Zn/Z8tLd62qlpJB7oS7TZgG5VYABjyxQpHnk/Z6WBRiDvBtl0N4HR5svNWI+uMenbO20S3s9mUCWGrzF9o5H4nc91B1MVv2k1dM89BIVMap/ftLtgZsslI1tmL/KCsl/HMyjEqYjpZQG8baxZ7Lk4Ll0DMdxJy8jBGydn4VxuO+2ef3RuAiwEscInaW/DVqmIsLKP5QBB1GbC3j1gRUuYMDhFuxAENpCr6SXMU+0UXtk1sx04xkdqbDeQSyHGl/HiL+G/4xeTtqgt7uW7ifDS3rE1JPLIwt97MciB8jF0syZFJrEAoSCNP/yfqxvzg5bTgAy4TofwnpvHrEu2dnlDjRcj7w48j+hiXY01WOE67udtQeYhZdbWUJVdmd8trcjmPAwo0XsLGOxjyq6jMLKgmnbCQd2/p9fCOFY4Y3lNzSS6G1NNjbFcjKx03dRwNvCIlpGBviPkPlBcokqvMAmGVrkLbQtkD+v6+Ecsem72kfZTTDLAIKAgva2utxxBsPSL1ZVsh+kU2wao+2aXe6lAR1W1gPAnyjRHLdG8ZdcsZa2HwHj8IiqJyoLu1h4fKIqvaNgwQYmH1lxjP10tzYzCDcXw30z321yjSHbS2k0wFUyTeTv+fSDOxGx1q6tJOeAAzJp3lEK3XoxKr0MUlmc2QaatuHQR6b9kNKqTJ9vewLmdT3jf1tAbrtNVewo5rJ3SEwJbKxburYcr+keP0ylRYaHUWyj1bt6pNG9hezIT0xD5x5hLuSABqQM+cSkek9h9mBJPtmAxzNOSbh46+UZ37TJbtUSrAlRLztuJc5+gHjHo9PJCKqDRVCjoBaMd2+TvSmHBh4XHziZcRZzVLsHtQtJTCWktmmYnZi1goJOWmZyA4dYrJ1DW1jGcZbvcZHJVtuVMW7pxi/7Gdm1cmonLdQx9mpzDWObMN4BGQ5Rddl+0jVM6dLYABO8lvw4iueee6E5heHjm1KearezKlXBAYMLEE2yPLSPb+yFKsikkSwQDhLWyBOJixNvGKH7RNmKz00xQMbTPZdbqzLfoQfOKvtO5mVi06fcCSl6kAk/7vSMy2WtdyNztSRTykee0mWWVS1yi4idwva9ybCPG6yddmZtWJJ6k3Men9t5LJQ4EuQhQNvOFcrnxCxhuyOwv4uf3gTKTNzpfLuoCN5Nj0EW80x1JtruwnatZ6iRNIE1RZSf8RR/7Aa8dY0m39mLU08yS33lOE/hYC6sOhtHi/anY8yhn4bsFvilOMrgZixGjDQ9Lx612a20ZlClTPIW0tmdjkCEuC/Qhb+Manxm/Yw32S7TVJ06mc2Z7MoO9peIOvWxB/KY9F7Q7GSsp3kTLgMBZhqrDNWF94P6x85VFWTNaYhKkzGdSCQVuxYWI0Ocaun+0baOESw6OxyDezxOelsifywhY2VRVS9iUXsFme0qHLMgtbvNljK3yUWG/Mx4t/EtKn+0DMCTixb73uTfiDZvON/s/sLXVjmdUsZYbNnmm7nff2d7gciVtBlZO2Vs1TgQ109M+8borDK97YBqdAxioN2X2o2xVoFkyZSjRp5RkW34gWYrfoD4RT7RSllOXqqiZtCp3orWkqfws5zsCPdW3SKjaHbCprWVZj4JbBgJaAqownK9s2y45coHSl5HyPyiWrI7tfb86YmAYZEhbkSZI9nLt/MFzY8ydYq9lScbqpH858NAYftlbBEGrtc/6UzPraJuzjf8AyDzVgPT5RFX+A7reR+cN9m3EeR+cFtZbk5CBps5XyRwtsySLXHI+cHPaKbMCZXxNwGg6ncIramaWNy1zx0VeSjjziSpYE2S4W1ifxW32gbDwvFidmKhvxMWFHLYG/wD0RwPKGSEC5kH+k/KJv4hRx/pPyitSLWWqOCpGozU6/XOMjtOkNPMuCcLG4PC2h6jf/wBRdNVJvPoR6xFXOJiFMasfu4siDyb53i43S1LSVrMtza4yOuvrCil2ZU4D3tLWI4a28iCI5Eyw5NpWMNJjhMNkNdifupqeLbli53UJytqdd3AAeUDYTMmkKCcIsOZOtuOXxMR1FX7OWW3nIdTvhlKZlJL/AIh83YEIp3Xzuw158h1jljK3bNnKHkz1JGFlYXByyPHhkYuK+qeZdAcAPuncR/Nw6xkX2yZjF5nvMbkgZeXCLbZNVjVkUht655jiP15eMdGbynKCRcljiOWuZv8AWsDrSu5u1wvDeesH0tPkrMCXtv8Au8uUGJL5GMs1DTUoAFhYRqOyFeKeoVmyRwUY7gCQQx6EeRMUqePlDw45xdq9l2jSCfJeWdHUgH1U+djHkiymSaqOLMrqGHRh9eUG7O7R1EhcKuSu5WXEB0vmB0gbaW02nP7R7YsvdXDppfnDY9jjG9uQWeQg1bGB4lAI18trgHiAfMRiu1lSBW04OiBSfzvv/oiZ9GPbYyJASWEXIKuEeAtHnWw5X9mGdVVrBMS+zlSwQzuAQxIANsyMuudo9Lj57+0SZPk185Z4cq7YpTG5BQ2sF6E2sNLc4thGt2Nt99o1wnTO5T0ivOCDQEKyqztvOZP5Yg7GVf8AEbSV21JmP44Tbyv6Q2Rso0uy3Vjgm1Ixvl3llJmiHhf/ANjGI2Ltl6aak5LY0OQOhBBBU23WJELOWpe30sygjOMN207XCiKSadZeO+J1t3VXgQtrM3wHOMntP7Vp7rglSklsRYsSXI/0g2APM3jP7K7N1tc2NEchiS02YSqm+/E2beF4W/Ek+thN+1CU6YZ9GH5YlZLjQ2YZRn9sdpa3adqeRJKyxb+7lAsMtMb2AAGWthGx2L9l9PLAeqczWGZUdyWOv3iOpHSH7W7fUFCvsaREmMuWGUFWWpGXecZE9LmKf4oth/ZW5GKsmhF1wyyC1v5nYYR4Xizn9pdmbNBWjlpNm2sWQhh+acbk9FvHnvaDthVVhImzCqbpaXVPEXu35rxRqYGmo272tqawkTHwyz/hp3U8d7eJjOzXuQo8Ya0ywJiOhb3mO4fOMVqCNkizSf8AWw/2GNPcDhGb2UhLyl3hWmNyvkPjF3XYhLYoO8cly0LGwOXWFRSvM9tUsFzNsCAbzvI9Y7UUz00xcVg1g1gb5EnI+UNk7PelRalx3z7inUHPMjjbPkIrX2uzsWnEsx39NBbhGtDcIRMVWJtcafd/YwNUADKwyip2PtNW7mLoNDFo6ljnGWLiHwljlpB1NTWET09NaCVSKsDhId7KJwmcdwQUM0s8DC9lfhBV4QI4iAyu1Ka0z/UL/P8A438YUG9oWGJOQP6D9YUdpeEVaIWvbIb24fMxJLliwVRZRoDv4seZjsx72GXIDRfmYIppQGo+Mee25c1rXj0JlDAMRVDhzsRyIO/LImKHtBtH2rIy4wuHCA/vKbnEvE7szF+yggggG+o5QKtMgN7XO6+duQvFlSqGn2O7jExwDdfMnw3QTs+h9m2LF3tFGl+hvryPrpB80ZxWV4yzEW8zSzhsqR1mKCL337iDvuIIwWjFUW23Sxe7gb/vgdfvAcD5iNhR1yuoZTiBzuNfEfXWMbuPfRqVLlxEORbkKuZJAAGpJyAHjEgAIy+vCJaGoMqYkwLcowa3G2o8osylTWl1tns0aenWYWJe49oMrLi0t0OV994y9RMAGset0tdIrZTKCCGWzKcmW/EfrGFrexNQZmEYDLv75IAC8SNb8o1f6SPRNlTMUiU19Zan/aI8q7W7SE2c7DMFsK/6V7t/j5xoO0XaSXLlCmpziVUCM40sBhwqRqTvIyjz2Y5c3Iyjnld2T1GsZp6X2d7cSygWpJRgLYrEq3AmwuD6RYV3a2mw4pf96QbZA2U7iSRcbtM48soKF5rYJSM7cFBNuZ3AdY2Gwfs9mB/a1EwJfIqmZZb5q5Pd6WuRuMdJalkeYdp+0VRU1BGJnBJUBAbPnuUbtLDPTfe8aTYX2b1dQA0wCnQ73F38EBv5kR63sbs9SUS2kS0l5Zuc2I5uc7eMZ/tN9pEinBWQP4iZ/KbIvMvv/KD4RpBewewNFRjEU9o4Fy803AtvC+6vW3jFb2n+1KlprpIH8RMGVlNpa9Xsb9Fv4R5ltntjUVdxUP3Doid1B4b+puYzVZQn3k7w4akdOIguvq9292xq62/tphEs6S07qDkRq35iYpQ0CSGvkMuUTKYlVMDEgiJYeGiGkVW2gsIVKgIK5C5zPBRmfrnHJ6EkW6Wh4lEn2Sat753AfhBhF6i52CgcvNa4xHCtriyr05/CLWYgAJVmDAd043yPGxNstfCI6SyqFC2AAAGW7pBDzBbMecSoz+2KubO9ndbOoZSo3kkZ20ByBgOXsgBSZhsToBu6k6xoWC20ECTpGIZE+cXYzaoFbunMaX3xd7G2vc4ZmZ53B9NYpaiQUYqeo5wbTU6ta+SPkrfgf8J5HdGsZN8mV3G4pyjC6/8AI/OJxKXn/U3zjFS6qZIbXGo+8hBI62i+odtI4GfiMj+ZY1fx3uMbXOBefmfnHAotv8z84bLnI2hv0BMSZbr/ANLfKOeq04UF9/mfnDGW3HziQsLZ5dQR8Yptr7UC9xO854bosloBq5ft53swTYC7HgBe3mT6QoN2VTqgOIgs2bG414dBCjXkaB01LbW/rBqSwNxt4wakhtcvERxpT/iTyI9Y56UA6jcp8YGKkn3b/XOLVpDahkHhf1geZSta+JQd+X7xdIrmQXzT4QPWScS5D4Qa6E53v4REZWve9Iis5KNjmNNRxG+LfZbNKN17yHMjenMcor65ArXvE1NOsDiG+x4XHwjXcRr5dSd4HUanyyPiIKWrvrfxsfWM3QVYIwBtNN9hwiwVzxjncYu1wlVbMXB5XB8M4gr9ssVszTGH4S1x5FormxH7w8v3hJK4m8JjF2gepLnvI1t2Qy8jlEqkDc39JibCeUNYHeBF0gun2/USkCS5romZsotrnra/rAlTt2of3qief/scDyvA8wHdAs1jwipo2pq2b3nZuN2J+JgJpl/r94e5MQEHeIKgmjjbn9X1iNGZc0NxvG8RM6wIBYvloL+V4solE2W5uwwtxGV+u4x00jfdKsOWvleBhOVh31z3EaxyVLzsjkciP1i1BJkPw/2n5x0SH3kKOJFv3jgWd+Nfrwhgksx7zX6RFSGZbup3m3t8hugzZ9KQcmOepsM/MR2h2c3QfGL+nkYRpEtEcuUwHv8AoIZNDfjPgq/qIOsDqIhnJeIKxkJ++3ko/wDWOLTsPvvb8vygl5VjvjpQ7vhFFJtemNgwYsV42/QQtiTxiKHNXGm7yiyn02K99LRnSrI5wmxU3UxqDaUTWuhzG4nP8rX9Dv8Aiyf2flv3kJR+K6eUU9Nty18a5ta/7W0i+2ftFHW4sSNc/iIu7OYnFVrUFTL0wuOKnC0dFfUrlgmDquL1EX6VC21ENaqXdGv5PppRO1XNys6ji3cHxv6RNSUAlm+LE+82+HzguonOTYX4xyXLY53sYxlnbwSCJEjK5IN9b6eUKHypZ+81/CFGFSpLtuHmR+kdVFue7f8AMfhAP9pSb2LqDzJHxtCO0ZFvfS2l8Q8usaBbSk/Ann8oHmy1OiqPH9o6lShtaxG4gE/pEdRUoPeOEA62YecAjKHAeERNJXgPKOtVyyLhhbjY2horZA++nn84yKzadLiU2HpGbVnBKgNmc7XzjcCqktljB6Z/CBy1ODex/of5RqXSUHsGkZFJZc265ekXKDP3YGG0ZA+8R+Vh+kJdpSR9+/g3yiVRuAcI6idYFTa0k5GYBzNx8YeNqyNPar5xBOy8AY5MTrEQ2nI3T0/qjh2lI/z0/qEUKZKgOZT9YKeuk/5yHowMRfx8k/46eLCMgP8AhjxMMelP0IPWqlbpyeDD9Ijavkg/+VPOAr2pjxivngob5EEEEcjF8dpSf8xPOBKmokOLF063iwU0yrRgA0tCQM3AKk9QDYnnCpKYu10Ww47vOC5NPTKbs6nxv6RdU9dTCwExQOto1bQBL2adWUwfTbPTWzDwgtdo09v/ADr/AFfOHf2pTj/HTpeM6oml09jrbrBPs+PnAB2rT75qH80NG1pG6cn9UNA4IP3geapHTfEa7Vl3t7VCP9Qhkyqln/ET+oQ0OuBlEpQWgNKyWTnMQdWFomWsl/5qH84+cBFNpydDpzih21SkAOu7d8Y0RqUB99P6hDKhUdbB0N+BENjJyqlMFnUtb3SCAw5dP3g/YuDGSmK1rG514eHOBJ2y1LnC6gA556b4uNl0aoLgjPnf1jVy4NcrEOultYeqiGJLvpnHUGdt8YUWq5fXlEqW0vDUW/DSEXAOZA8RASi3M9YUR+2XiPMWhRdITe4OkOA+vOFCiiIaR2ZrChQEK6w99TChRA4Rxvr1hQoCRNfP4Rzj1+UKFAJYdvhQoB2765wrwoUBG0dHyhQoCNNYkO+FChR1dPrjD1/T9IUKKOP+giZdPGFCiJEXGCVQZZDf+schRYrhQW0G/dDZspb+6PIQoUUNMhfwr5CIXkLh91fIQoUQRrKUaKB4CJmQcB5co7CgGmSuXdXyEceSv4R5COQolDJUpb+6PIQ4qOEKFAdmU6X9xfIQmkLb3V8hChQENRTJb3F8hEgpJdvcTT8IhQoB0mhlZ/3abvuj5QoUKND/2Q==",
        pathUrl: "/gafas-persol-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas persol polarizadas",
            pathUrl: "/gafas-persol-polarizadas",
          },
        ],
      },
      {
        _id: 17,
        name: "Gafas oakley polarizadas",
        description: "",
        photo:
          "data:image/png;base64,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",
        pathUrl: "/gafas-oakley-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas oakley polarizadas",
            pathUrl: "/gafas-oakley-polarizadas",
          },
        ],
      }
    ],
    recommendedCategories: [],
  },

  {
    _id: 23,
    name: "Colores",
    description: "",
    photo: "",
    pathUrl: "",
    categories: [
      {
        _id: 24,
        name: "Gafas azules polarizadas",
        description: "",
        photo: "",
        pathUrl: "/gafas-azules-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas azules polarizadas",
            pathUrl: "/gafas-azules-polarizadas",
          },
        ],
      },
      {
        _id: 27,
        name: "Gafas amarillas polarizadas",
        description: "",
        photo: "",
        pathUrl: "/gafas-amarillas-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas amarillas polarizadas",
            pathUrl: "/gafas-amarillas-polarizadas",
          },
        ],
      },
      {
        _id: 32,
        name: "Gafas grises polarizadas",
        description: "",
        photo: "",
        pathUrl: "/gafas-grises-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas grises polarizadas",
            pathUrl: "/gafas-grises-polarizadas",
          },
        ],
      },
      {
        _id: 34,
        name: "Gafas rojas polarizadas",
        description: "",
        photo: "",
        pathUrl: "/gafas-rojas-polarizadas",
        categories: [],
        recommendedCategories: [],
        breadCrumbs: [
          {
            _id: 0,
            name: "Gafas rojas polarizadas",
            pathUrl: "/gafas-rojas-polarizadas",
          },
        ],
      },
    ],
    recommendedCategories: [],
  },
];

let findItem = (list, _id) => {
  let array = [];
  list.map((category) => {
    let found = category.categories.find((item) => item._id == _id);
    if (found) {
      array.push(found);
    } else {
      category.categories.map((categoryTwo) => {
        if (categoryTwo.categories.length > 0) {
          let foundTwo = categoryTwo.categories.find(
            (itemTwo) => itemTwo._id == _id
          );
          if (foundTwo) {
            array.push(foundTwo);
          } else {
            categoryTwo.categories.map((categoryThree) => {
              if (categoryThree.categories > 0) {
                let foundThree = categoryThree.categories.find(
                  (itemThree) => itemThree._id == _id
                );
                if (foundThree) {
                  array.push(foundThree);
                } else {
                  return "No item";
                }
              }
            });
          }
        } else {
          return "No item";
        }
      });
    }
  });

  return array;
};

const getAllCategories = () => {
  return Promise.resolve(categories_list);
};

const getCategoryById = async (_id) => {
  let response;
  categories_list.map((category) => {
    if (category._id == _id) {
      response = category;
    }
  });
  return Promise.resolve(response);
};

const getSubcategoryById = async (_id) => {
  let response;
  response = findItem(categories_list, _id);
  return Promise.resolve(response);
};

export default {
  getAllCategories,
  getCategoryById,
  getSubcategoryById,
};
