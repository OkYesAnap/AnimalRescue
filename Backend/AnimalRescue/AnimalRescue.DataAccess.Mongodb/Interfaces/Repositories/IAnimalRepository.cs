﻿using AnimalRescue.DataAccess.Mongodb.Query;
using AnimalRescue.Models.DTO.Models;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace AnimalRescue.DataAccess.Mongodb.Interfaces.Repositories
{
    public interface IAnimalRepository
    {
        Task<List<AnimalDto>> GetAnimalsAsync(DbQuery query);
        Task<int> GetAnimalCountAsync(DbQuery query);
        Task<AnimalDto> GetAnimalAsync(string id);
        Task UpdateAnimalAsync(AnimalDto instanse);
        Task DeleteAnimalAsync(string id);
        Task<AnimalDto> CreateAnimalAsync(AnimalDto instanse);
    }
}
