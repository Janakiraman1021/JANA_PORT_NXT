"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BookOpen, Star, Calendar, ExternalLink, ShoppingCart, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface BookLinks {
  amazon?: string
  googlePlay?: string
  flipkart?: string
  publisher?: string
  website?: string
}

interface Book {
  title: string
  titleEnglish?: string
  author?: string
  publicationYear?: string
  publisher?: string
  isbn?: string
  synopsis?: string
  recognition?: string
  image: string
  links: BookLinks
}

export default function BooksSection() {
  const mainBook: Book = {
    title: 'என் இதயத்தின் ஓசை',
    titleEnglish: 'En Idhayathin Osai',
    author: 'Janakiraman',
    publicationYear: '2024',
    publisher: 'JEC Publication',
    isbn: '9789361759345',
    synopsis: 'A heartfelt collection of Tamil poetry exploring themes of love, technology, and modern life. The verses blend traditional Tamil poetic forms with contemporary perspectives on blockchain and digital innovation.',
    recognition: 'Featured in Tamil Literary Review 2023',
    image: '/assets/books/sound-of-my-heart.jpeg',
    links: {
      amazon: 'https://www.amazon.in/dp/9361759345',
      googlePlay: 'https://play.google.com/store/books/details?id=CGkTEQAAQBAJ',
      flipkart: 'https://www.flipkart.com/product/p/itme?pid=9789361759345',
      publisher: 'https://jecpublication.com/index.php/product/en-itayattin-ocai/',
    },
  }

  const coAuthoredBooks: Book[] = [
    {
    title: 'மழலையும் நானும்',
    image: '/assets/books/mazhalai.jpg', 
    links: {
      amazon: 'https://amzn.to/3xPxoDA',
      flipkart: 'https://fktr.in/DRn7oPD',
    },
  },
  {
    title: 'விரும்பிய வரிகள்',
    image: '/assets/books/virumbiya.jpg', 
    links: {
      amazon: 'https://amzn.to/3TUTY5C',
      flipkart: 'https://fktr.in/zotvX59',
    },
  },
  {
    title: 'வினோத உலகம்',
    image: '/assets/books/vinotha.jpg', 
    links: {
      amazon: 'https://amzn.to/3ZRNPuL',
      flipkart: 'https://fktr.in/zb5RsJ8',
    },
  },
  {
    title: 'எனது அபிமானி',
    image: '/assets/books/abimani.jpg', 
    links: {
      amazon: 'https://www.amazon.in/dp/9361752154',
      googlePlay: 'https://play.google.com/store/books/details?id=vTYZEQAAQBAJ',
      website: 'https://jecpublication.com/index.php/product/enadhu-abimaani/',
    },
  },
  {
    title: 'என் அழகிய தேவதை',
    image: '/assets/books/mmy-beautiful-angel.jpg', 
    links: {
      amazon: 'https://www.amazon.in/dp/9361751379',
      googlePlay: 'https://play.google.com/store/books/details?id=LTYYEQAAQBAJ',
      website: 'https://jecpublication.com/index.php/product/en-azhagiya-dhevadhai/',
    },
  },
  {
    title: 'முகமரிய காதல்',
    image: '/assets/books/faceless-love.jpg', 
    links: {
      amazon: 'https://amzn.to/3LEopsn',
      flipkart: 'https://fktr.in/91xf1kk',
    },
  },
  {
    title: 'பாரதி! யாரா?!',
    image: '/assets/books/barathi.png', 
    links: {
      amazon: 'https://amzn.to/3CQtRaH',
      flipkart: 'https://fktr.in/4iItIOx',
    },
  },
  {
    title: 'ஒரு தலை காதல்',
    image: '/assets/books/oneside-love.png', 
    links: {
      amazon: 'https://www.amazon.in/dp/9369768564',
      flipkart: ' ',
    },
  },
  {
    title: 'தோழமையின் தடங்கல்',
    image: '/assets/books/friend.png', 
    links: {
      amazon: 'https://amzn.to/3CQtRaH',
      flipkart: 'https://fktr.in/4iItIOx',
    },
  },
  ]

  return (
    <section id="books" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Books</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Published works and literary contributions
          </p>
        </motion.div>

        {/* Main Book */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <Image
                    src={mainBook.image}
                    alt={mainBook.title}
                    width={400}
                    height={600}
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>

                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {mainBook.title}
                  </h3>
                  {mainBook.titleEnglish && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      ({mainBook.titleEnglish})
                    </p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {mainBook.author && (
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Author</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{mainBook.author}</p>
                      </div>
                    )}
                    {(mainBook.publisher || mainBook.publicationYear) && (
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Publisher</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {mainBook.publisher}, {mainBook.publicationYear}
                        </p>
                      </div>
                    )}
                    {mainBook.isbn && (
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">ISBN-13</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{mainBook.isbn}</p>
                      </div>
                    )}
                  </div>

                  {mainBook.synopsis && (
                    <div className="mb-6">
                      <p className="text-gray-600 dark:text-gray-300">{mainBook.synopsis}</p>
                    </div>
                  )}

                  {mainBook.recognition && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <Award className="w-5 h-5" />
                        <p className="font-medium">{mainBook.recognition}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {Object.entries(mainBook.links).map(([platform, url]) => (
                      <Button
                        key={platform}
                        variant="outline"
                        onClick={() => window.open(url, "_blank")}
                        className="flex items-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="capitalize">{platform}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Co-Authored Books */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Co-Authored Books
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coAuthoredBooks.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={300}
                      height={450}
                      className="rounded-lg shadow-lg mb-6 w-full object-cover"
                    />
                    <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">
                      {book.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {Object.entries(book.links).map(([platform, url]) => (
                        <Button
                          key={platform}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(url, "_blank")}
                          className="flex items-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span className="capitalize">{platform}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
