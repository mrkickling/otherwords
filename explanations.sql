-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Värd: localhost
-- Tid vid skapande: 25 okt 2019 kl 15:59
-- Serverversion: 10.1.28-MariaDB
-- PHP-version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `synonym`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `explanations`
--

CREATE TABLE `explanations` (
  `id` int(11) NOT NULL,
  `word` int(255) DEFAULT NULL,
  `explainer` varchar(255) DEFAULT NULL,
  `explanation` varchar(141) DEFAULT NULL,
  `added` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `explanations`
--

INSERT INTO `explanations` (`id`, `word`, `explainer`, `explanation`, `added`) VALUES
(1, 1, 'jocke', 'yellow fruit', NULL),
(2, 2, 'jocke', 'king of the savanna', NULL),
(3, 4907, NULL, 'A sound a scared person makes', NULL),
(4, 4975, NULL, 'When to people split ways, it is a ...', NULL),
(5, 966, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'things you dress in', NULL),
(6, 121, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'gives advice', NULL),
(7, 1794, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'opposite of late', NULL),
(8, 5723, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'a roof can be made of these', NULL),
(9, 4010, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'something you can sketch or draw with', NULL),
(10, 4995, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'if someone is very hurt they are .... hurt', NULL),
(11, 2087, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'get something out of something', NULL),
(12, 4656, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'answer to text or email', NULL),
(13, 3085, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'around the round table', NULL),
(14, 5154, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'vapor', NULL),
(15, 5113, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'SKELETOR', NULL),
(16, 3883, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'input gives ...', NULL),
(17, 587, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'what your skin does when you have cut yourself', NULL),
(18, 4297, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'someone who is above someone else in a power structure', NULL),
(19, 690, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'copper colored metal', NULL),
(20, 1860, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'a country in another country, with a consulate and stuff like that', NULL),
(21, 819, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'praising, hurraying, birthday, wedding!', NULL),
(22, 1671, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'far away', NULL),
(23, 1961, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'founded', NULL),
(24, 6293, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'a luxury boat', NULL),
(25, 2426, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'overall', NULL),
(26, 4215, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'exact', NULL),
(27, 2283, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'game with ball', NULL),
(28, 455, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'beatles is a rock-....', NULL),
(29, 431, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'not front', NULL),
(30, 2173, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'political women rights person', NULL),
(31, 2941, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'mean to do', NULL),
(32, 6154, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'come in!', NULL),
(33, 5615, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'tv slang', NULL),
(34, 5723, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'roof-___s', NULL),
(35, 4397, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'documents that are released to everyone are ...', NULL),
(36, 5639, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'horrendously', NULL),
(37, 791, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'orange vegetable', NULL),
(38, 5794, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'conservative or just a holiday we celebrate', NULL),
(39, 6015, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'different, numerous', NULL),
(40, 5412, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'building / road', NULL),
(41, 3621, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'without clothes', NULL),
(42, 3527, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'moveability', NULL),
(43, 3449, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'around the cell nucleous but within the cell walls', NULL),
(44, 2861, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'effect on someone', NULL),
(45, 745, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'time keeping book', NULL),
(46, 5467, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'fits the context', NULL),
(47, 5662, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'i mine, you your, they ...', NULL),
(48, 1539, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'work in making clothes aestheticly pleasing', NULL),
(49, 5644, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'political mass murderers, 9/11 started a the war on them (singular)', NULL),
(50, 6232, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'something you want and you can ask for when you blow out candles on your birthday cake', NULL),
(51, 2917, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'in another way', NULL),
(52, 3286, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'not short', NULL),
(53, 1779, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'not interesting', NULL),
(54, 806, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'take, arrest', NULL),
(55, 507, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'the area which you sleep in', NULL),
(56, 5724, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'until', NULL),
(57, 3727, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'not adjective, a thing', NULL),
(58, 4698, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'a place to run away to, an escape to relax in', NULL),
(59, 4929, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'not known by the public', NULL),
(60, 4397, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'not hidden or private', NULL),
(61, 201, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'another way of doing it', NULL),
(62, 6032, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'talkative', NULL),
(63, 5730, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'good or bad, depending on when you arrive', NULL),
(64, 1050, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'friends', NULL),
(65, 2622, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'warming', NULL),
(66, 2860, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'cause', NULL),
(67, 1432, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'a discussion, often political ', NULL),
(68, 5074, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'an encrypted chat app, could also a loud sound', NULL),
(69, 1958, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'very important for the situation', NULL),
(70, 263, '0.fmnhnbk18i4iFri Oct 25 2019 11:41:26 GMT+0200 (centraleuropeisk sommartid)', 'opposite of a specific thing', NULL),
(71, 6271, '0.fmnhnbk18i4iFri Oct 25 2019 11:41:26 GMT+0200 (centraleuropeisk sommartid)', 'having anxiety about something', NULL),
(72, 3077, '0.2h98lnbkm1m8Wed Oct 23 2019 22:22:55 GMT+0200 (centraleuropeisk sommartid)', 'hej\n', NULL),
(73, 1380, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'A bend', NULL),
(74, 3006, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'A problem or a task on github', NULL),
(75, 613, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Exploding weapon, can be time triggered', NULL),
(76, 2319, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Luckily', NULL),
(77, 2229, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'When a dress is a perfect match with my body', NULL),
(78, 1132, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Aggresive debate/fight', NULL),
(79, 5071, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Something you can see. What a ___ the eiffeltower is! ', NULL),
(80, 3342, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Leader of a city', NULL),
(81, 5897, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Not sure', NULL),
(82, 5733, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Extra money to the waitress', NULL),
(83, 5275, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Football is a', NULL),
(84, 3771, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'An occurence', NULL),
(85, 1532, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Synonym to explanation. Says something about something. ', NULL),
(86, 2502, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'reach', NULL),
(87, 1933, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'The climate affects this', NULL),
(88, 5793, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'example christmas, easter, 4th of july', NULL),
(89, 5222, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Opposite of northern', NULL),
(90, 5030, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Ship it', NULL),
(91, 1239, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'When someone is judged in a trial they are... ', NULL),
(92, 5468, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'A bag for businessmen', NULL),
(93, 3585, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Big hill, for example everest', NULL),
(94, 579, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'the blank and sharp part of the knife', NULL),
(95, 5352, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Not moving', NULL),
(96, 673, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Where beer is made', NULL),
(97, 5252, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'How to write words', NULL),
(98, 2635, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'no\n', NULL),
(99, 3779, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'violation. no ____, man.', NULL),
(100, 2348, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'often', NULL),
(101, 5163, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'Hello', NULL),
(102, 5595, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'Not coffee, but warm', NULL),
(103, 3573, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Almost all the time', NULL),
(104, 3514, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Can be sent from moscow to new York in a few hours and is a weapon', NULL),
(105, 3154, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'put your arm on the wall', NULL),
(106, 3728, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'A book can be a', NULL),
(107, 762, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'a disease and i think also the name of a crabfish', NULL),
(108, 387, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'If you try to murder someone its ____ murder', NULL),
(109, 4594, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'what amy winehouse went to', NULL),
(110, 5080, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'No souns', NULL),
(111, 3029, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Wedd cigarett', NULL),
(112, 1131, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Saying yes is a', NULL),
(113, 4346, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'something you swear to keep', NULL),
(114, 6188, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'silent talk', NULL),
(115, 452, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'forbid someone from being in a place/country/server', NULL),
(116, 5057, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'a cabin in the bathroom where you can get clean', NULL),
(117, 6300, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'color that together with red forms orange', NULL),
(118, 5637, '0.m4k34kidj93aFri Oct 25 2019 12:45:39 GMT+0200 (centraleuropeisk sommartid)', 'a big balcony', NULL),
(119, 207, '0.5aai9ck3n2f3Fri Oct 25 2019 12:45:49 GMT+0200 (Central European Summer Time)', 'Opposite of never', NULL),
(120, 2594, '0.795el9m2gm6dFri Oct 25 2019 14:59:40 GMT+0200 (CEST)', 'Laws that apply on for instance social interaction, games or other relations between persons or organisations.', NULL);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `explanations`
--
ALTER TABLE `explanations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `explanations`
--
ALTER TABLE `explanations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
