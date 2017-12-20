module Main where

import Prelude

import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, logShow)
import Data.List (List(..), (:), range)
import Performance.Minibench (bench)

sum :: List Int -> Int
sum = go 0
  where
  go n Nil = n
  go n (x:xs) = go (n + x) xs

foreign import sum' :: List Int -> Int

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = do
  let longList = range 1 100000
  logShow (sum longList)
  logShow (sum' longList)
  bench \_ -> sum' longList
  bench \_ -> sum longList
