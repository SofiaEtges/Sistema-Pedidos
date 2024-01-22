-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22/01/2024 às 23:17
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `restaurante_ifood`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `carrinho`
--

CREATE TABLE `carrinho` (
  `id` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `carrinho`
--

INSERT INTO `carrinho` (`id`, `id_pedido`, `id_produto`, `quantidade`) VALUES
(5, 18, 10, 1),
(6, 5, 10, 1),
(7, 5, 15, 1),
(8, 5, 16, 1),
(9, 10, 44, 1),
(10, 10, 44, 1),
(11, 10, 44, 1),
(12, 15, 44, 1),
(13, 10, 44, 1),
(14, 15, 44, 1),
(15, 10, 44, 1),
(16, 15, 44, 1),
(17, 10, 44, 1),
(18, 15, 44, 1),
(19, 10, 44, 1),
(20, 15, 44, 1),
(21, 10, 44, 1),
(22, 15, 44, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `forma_pagamento`
--

CREATE TABLE `forma_pagamento` (
  `id` int(11) NOT NULL,
  `descricao` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `forma_pagamento`
--

INSERT INTO `forma_pagamento` (`id`, `descricao`) VALUES
(1, 'Pix'),
(2, 'Dinheiro'),
(3, 'Cartão de Credito'),
(4, 'Cartão de Debito');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedido`
--

CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_status` int(11) NOT NULL,
  `id_forma_pagamento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `pedido`
--

INSERT INTO `pedido` (`id`, `id_usuario`, `id_status`, `id_forma_pagamento`) VALUES
(5, 38, 1, NULL),
(6, 38, 1, NULL),
(7, 38, 1, NULL),
(8, 38, 1, NULL),
(9, 38, 1, NULL),
(10, 38, 1, NULL),
(11, 38, 1, NULL),
(12, 38, 1, NULL),
(13, 38, 1, NULL),
(14, 38, 1, NULL),
(15, 38, 1, NULL),
(16, 38, 1, NULL),
(17, 48, 1, NULL),
(18, 49, 1, NULL),
(19, 38, 1, NULL),
(20, 38, 1, NULL),
(21, 38, 1, NULL),
(22, 38, 1, NULL),
(23, 38, 1, NULL),
(24, 38, 1, NULL),
(25, 38, 1, NULL),
(26, 38, 1, NULL),
(27, 38, 1, NULL),
(28, 38, 1, NULL),
(29, 38, 1, NULL),
(30, 38, 1, NULL),
(31, 38, 1, NULL),
(32, 38, 1, NULL),
(33, 38, 1, NULL),
(34, 38, 1, NULL),
(35, 38, 1, NULL),
(36, 38, 1, NULL),
(37, 38, 1, NULL),
(38, 38, 1, NULL),
(39, 38, 1, NULL),
(40, 38, 1, NULL),
(41, 38, 1, NULL),
(42, 38, 1, NULL),
(43, 38, 1, NULL),
(44, 52, 1, NULL),
(45, 52, 1, NULL),
(46, 52, 1, NULL),
(47, 52, 1, NULL),
(48, 52, 1, NULL),
(49, 52, 1, NULL),
(50, 52, 1, NULL),
(51, 52, 1, NULL),
(52, 52, 1, NULL),
(53, 52, 1, NULL),
(54, 52, 1, NULL),
(55, 52, 1, NULL),
(56, 52, 1, NULL),
(57, 52, 1, NULL),
(58, 52, 1, NULL),
(59, 52, 1, NULL),
(60, 52, 1, NULL),
(61, 52, 1, NULL),
(62, 52, 1, NULL),
(63, 52, 1, NULL),
(64, 52, 1, NULL),
(65, 52, 1, NULL),
(66, 52, 1, NULL),
(67, 52, 1, NULL),
(68, 52, 1, NULL),
(69, 52, 1, NULL),
(70, 52, 1, NULL),
(71, 52, 1, NULL),
(72, 52, 1, NULL),
(73, 52, 1, NULL),
(74, 52, 1, NULL),
(75, 52, 1, NULL),
(76, 52, 1, NULL),
(77, 52, 1, NULL),
(78, 52, 1, NULL),
(79, 52, 1, NULL),
(80, 52, 1, NULL),
(81, 52, 1, NULL),
(82, 52, 1, NULL),
(83, 52, 1, NULL),
(84, 52, 1, NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `descricao` varchar(50) NOT NULL,
  `preco` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`id`, `descricao`, `preco`) VALUES
(10, 'Lasanha de Frango', 29.58),
(15, 'Lentilha', 31.55),
(16, 'Pizza', 29.90),
(17, 'Massa', 15.90);

-- --------------------------------------------------------

--
-- Estrutura para tabela `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `descricao` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `status`
--

INSERT INTO `status` (`id`, `descricao`) VALUES
(1, 'Aberto'),
(2, 'Em Andamento'),
(3, 'Concluido '),
(4, 'Cancelado');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `id` int(11) NOT NULL,
  `descricao` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id`, `descricao`) VALUES
(1, 'Administrador'),
(2, 'Cliente');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `senha` varchar(32) NOT NULL,
  `email` varchar(100) NOT NULL,
  `id_tipo_usuario` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `senha`, `email`, `id_tipo_usuario`) VALUES
(37, 'Admin', '81dc9bdb52d04dc20036dbd8313ed055', 'admin@gmail', 1),
(45, 'adm', '827ccb0eea8a706c4c34a16891f84e7b', 'adm@gmail', 1),
(47, 'novo', 'ec6a6536ca304edf844d1d248a4f08dc', 'Novo@gmail', 0),
(48, '1', '81dc9bdb52d04dc20036dbd8313ed055', '1@gmail', 2),
(49, 'eu', '81dc9bdb52d04dc20036dbd8313ed055', 'eu@gmail', 2),
(51, 'JoaoEsteveAqui34', 'e10adc3949ba59abbe56e057f20f883e', 'JEAa@gmail.com', 1),
(52, 'Usuario', '81dc9bdb52d04dc20036dbd8313ed055', 'usuario@gmail', 2),
(53, '1', '81dc9bdb52d04dc20036dbd8313ed055', '12@gmail', 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `carrinho`
--
ALTER TABLE `carrinho`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `forma_pagamento`
--
ALTER TABLE `forma_pagamento`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `carrinho`
--
ALTER TABLE `carrinho`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de tabela `forma_pagamento`
--
ALTER TABLE `forma_pagamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
