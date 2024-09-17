CREATE TABLE IF NOT EXISTS `chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `mensagem` text NOT NULL,
  `cor` varchar(7) NOT NULL DEFAULT '#000000',
  `img` varchar(255) NOT NULL DEFAULT 'default.png',  
  `data` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;